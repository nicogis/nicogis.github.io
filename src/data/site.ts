export interface FocusArea { title: string; symbol: string; description: string; tags: string[]; }
export interface FeaturedProject { name: string; description: string; category: string; url: string; }
export const focusAreas: FocusArea[] = [
  { title: 'Geospatial engineering', symbol: '◎', description: 'GIS platforms, spatial analysis, ArcGIS SDKs and custom geospatial experiences.', tags: ['ArcGIS', 'Spatial', 'GeoAI'] },
  { title: 'Software architecture', symbol: '⌘', description: 'C# and .NET applications, extensible architectures, performance and developer tooling.', tags: ['.NET', 'C#', 'Architecture'] },
  { title: 'AI & intelligent systems', symbol: '✳', description: 'Applied LLMs, agent orchestration, retrieval workflows and engineering experiments.', tags: ['LLM', 'Agents', 'RAG'] },
  { title: 'Cloud & infrastructure', symbol: '◈', description: 'Azure services, automation, deployment and operational engineering.', tags: ['Azure', 'Cloud', 'DevOps'] },
];
export const featuredProjects: FeaturedProject[] = [
  { name: 'GeoDynamics', description: 'Experiments in interactive geospatial dynamics and simulation.', category: 'GEOSPATIAL / SIMULATION', url: 'https://github.com/nicogis?tab=repositories&q=GeoDynamics' },
  { name: 'GeoMonitor', description: 'Tools and ideas for monitoring geospatial and infrastructure systems.', category: 'OBSERVABILITY / GIS', url: 'https://github.com/nicogis?tab=repositories&q=GeoMonitor' },
  { name: 'NicoGIS Geodatabase Designer', description: 'Visual modeling and design workflows for geodatabase structures.', category: 'GIS / DEVELOPER TOOLS', url: 'https://github.com/nicogis?tab=repositories&q=Geodatabase' },
];
