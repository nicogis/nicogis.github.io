import { excludedRepositories, maxProjects, pinnedRepositories } from './projects.config';

interface GitHubRepository {
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  private: boolean;
  archived: boolean;
  updated_at: string;
}

export interface PublicProject {
  name: string;
  description: string;
  category: string;
  url: string;
  stars: number;
}

const owner = 'nicogis';
const allowedUrl = /^https:\/\/github\.com\/nicogis\/[A-Za-z0-9_.-]+\/?$/i;

/**
 * Uses GitHub's unauthenticated PUBLIC user endpoint.
 * No personal access token is used, so private repositories cannot be returned.
 * Fails closed on API errors: never publishes guessed or hard-coded private names.
 */
export async function getPublicProjects(): Promise<PublicProject[]> {
  const all: GitHubRepository[] = [];
  for (let page = 1; page <= 5; page++) {
    const response = await fetch(
      `https://api.github.com/users/${owner}/repos?type=public&per_page=100&page=${page}&sort=updated`,
      { headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'NicoGIS-Website' } }
    );
    if (!response.ok) {
      throw new Error(`GitHub public repository API returned HTTP ${response.status}`);
    }
    const repos: unknown = await response.json();
    if (!Array.isArray(repos)) throw new Error('Invalid GitHub API response');
    all.push(...(repos as GitHubRepository[]));
    if (repos.length < 100) break;
  }
  const excluded = new Set(excludedRepositories.map(x => x.toLowerCase()));
  const pinned = new Map(pinnedRepositories.map((name, index) => [name.toLowerCase(), index]));
  return all
    .filter(repo => repo && repo.private === false && repo.fork === false && repo.archived === false)
    .filter(repo => repo.full_name?.toLowerCase().startsWith(`${owner}/`) && allowedUrl.test(repo.html_url))
    .filter(repo => !excluded.has(repo.name.toLowerCase()))
    .sort((a, b) => {
      const aPin = pinned.get(a.name.toLowerCase()) ?? Number.MAX_SAFE_INTEGER;
      const bPin = pinned.get(b.name.toLowerCase()) ?? Number.MAX_SAFE_INTEGER;
      return aPin - bPin || Date.parse(b.updated_at) - Date.parse(a.updated_at);
    })
    .slice(0, maxProjects)
    .map(repo => ({
      name: repo.name,
      description: repo.description || 'Open-source project on GitHub.',
      category: repo.language || 'OPEN SOURCE',
      url: repo.html_url,
      stars: repo.stargazers_count,
    }));
}
