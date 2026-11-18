import Image from "next/image";
import type { Project } from "@/types/content";
export function ProjectMedia({ project }: { project: Project }) {
  const media = project.screenshots.filter(item => item.publicReady);
  if (!media.length && !project.video?.publicReady) return null;
  return <div className="project-media">{media.map(item => <figure key={item.src}><Image src={item.src} width={item.width} height={item.height} alt={item.description} sizes="(max-width: 768px) 100vw, 900px"/><figcaption>{item.description} · {item.version} · {item.status} · {item.dataOrigin} · {item.source}</figcaption></figure>)}{project.video?.publicReady && <figure><video controls preload="metadata" aria-label={project.video.description}><source src={project.video.src}/><track kind="captions"/></video><figcaption>{project.video.description}</figcaption></figure>}</div>;
}
