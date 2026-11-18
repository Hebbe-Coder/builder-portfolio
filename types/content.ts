export type EvidenceStatus = "verified" | "implemented" | "simulated" | "historical" | "planned" | "unverified";
export type Evidence = {
  id: string; title: string; status: EvidenceStatus; description: string;
  source: string; version: string; date: string; scope: string;
};
export type ProjectCategory = "AI Product" | "AI Agent" | "Full-Stack" | "Business System" | "FDE Practice";
export type Media = {
  src: string; width: number; height: number; project: string; version: string;
  source: string; status: EvidenceStatus; description: string; dataOrigin: string; publicReady: boolean;
};
export type Evolution = { label: string; title: string; changed: string; why: string; learned: string; status: EvidenceStatus };
export type Project = {
  id: string; slug: string; number: string; title: string; subtitle: string; positioning: string;
  description: string; category: ProjectCategory[]; status: string; role: string; displayVersion: string;
  context: string; problem: string; productThinking: string[]; solution: string;
  workflow: string[]; workflowNote: string; architecture: { label: string; items: string[] }[];
  engineering: { title: string; description: string; scope: string }[];
  technologies: string[]; evidence: string[]; limitations: string[]; evolution: Evolution[];
  screenshots: Media[]; video: { src: string; description: string; publicReady: boolean } | null;
  githubUrl: string | null; demoUrl: string | null; color: "blue" | "orange" | "green";
};
