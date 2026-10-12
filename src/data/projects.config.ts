/**
 * Public repositories to prioritize, in display order.
 * Use exact GitHub repository names. Unlisted public repositories follow by latest update.
 * Any name that is private, deleted or not owned by nicogis is automatically ignored.
 */
export const pinnedRepositories: string[] = [
  'GeoDynamics',
  'GeoMonitor',
];

/** Repository names to exclude from the portfolio, even if public. */
export const excludedRepositories: string[] = [
  'nicogis.github.io',
  'nicogis-website-preview',
];

/** Maximum number of project cards on the homepage. */
export const maxProjects = 9;
