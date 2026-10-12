export interface FocusArea { title: string; symbol: string; description: string; tags: string[]; }
export const focusAreas: FocusArea[] = [
  { title: 'Geospatial engineering', symbol: '◎', description: 'GIS platforms, spatial analysis, ArcGIS SDKs and custom geospatial experiences.', tags: ['ArcGIS', 'Spatial', 'GeoAI'] },
  { title: 'Software architecture', symbol: '⌘', description: 'C# and .NET applications, extensible architectures, performance and developer tooling.', tags: ['.NET', 'C#', 'Architecture'] },
  { title: 'AI & intelligent systems', symbol: '✳', description: 'Applied LLMs, agent orchestration, retrieval workflows and engineering experiments.', tags: ['LLM', 'Agents', 'RAG'] },
  { title: 'Cloud & infrastructure', symbol: '◈', description: 'Azure services, automation, deployment and operational engineering.', tags: ['Azure', 'Cloud', 'DevOps'] },
];
