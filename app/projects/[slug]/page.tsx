import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { getEvidence } from "@/data/evidence";
import { projectSections } from "@/data/navigation";
import { Architecture, Badge, EvidenceCard, Eyebrow, ProjectVisual, TextLink, Workflow } from "@/components/ui";
import { ProjectMedia } from "@/components/project-media";
import { pageMetadata, siteOrigin } from "@/lib/metadata";
export const dynamicParams = false;
export function generateStaticParams() { return projects.map(p => ({slug:p.slug})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}) { const project = getProject((await params).slug); return project ? pageMetadata(project.title,project.description,`/projects/${project.slug}`) : {}; }
function CaseSection({ title, children }: { title:string; children:React.ReactNode }) { const index = projectSections.indexOf(title); return <section className="case-section" id={title.toLowerCase().replaceAll(" ","-")}><Eyebrow>{String(index+1).padStart(2,"0")} / {title}</Eyebrow>{children}</section>; }
export default async function ProjectPage({params}:{params:Promise<{slug:string}>}) {
  const project = getProject((await params).slug); if(!project) notFound();
  const next = projects[(projects.indexOf(project)+1)%projects.length]; const origin = siteOrigin();
  return <div className="shell case-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"CreativeWork",name:project.title,description:project.description,author:{"@type":"Person",name:"曾子健"},...(origin?{url:`${origin}/projects/${project.slug}`}:{})}).replace(/</g,"\\u003c")}}/>
    <section className="case-hero"><Link className="back-link" href="/projects"><ArrowLeft size={15}/>All projects</Link><div className="case-title-meta"><Eyebrow>PROJECT {project.number} / CASE STUDY</Eyebrow><span className="project-status"><span/>{project.status}</span></div><h1>{project.title}<span className="accent">.</span></h1><p className="case-subtitle">{project.subtitle}</p>{project.id === "bsc-studio" && <p className="muted">AI Business Analysis & Project Agent Workspace</p>}<div className="case-meta"><div><span className="eyebrow">ROLE / PRACTICE</span><p>{project.role}</p></div><div><span className="eyebrow">DISPLAY SCOPE</span><p>{project.displayVersion}</p></div><div><span className="eyebrow">DISCIPLINES</span><p>{project.category.filter(c=>c!=="FDE Practice").join(" · ")}</p></div></div><ProjectVisual project={project}/></section>
    <div className="case-layout"><aside className="case-nav"><p className="eyebrow">IN THIS CASE</p><nav aria-label="Case study sections">{projectSections.map((section,i)=><a key={section} href={`#${section.toLowerCase().replaceAll(" ","-")}`}><span className="mono">{String(i+1).padStart(2,"0")}</span>{section}</a>)}</nav></aside><div className="case-content">
      <CaseSection title="Overview"><h2>{project.positioning}</h2><p className="lead">{project.description}</p><p className="scope-note">展示范围：{project.displayVersion}。素材采用架构与流程示意；未发布未经确认的系统截图。</p><ProjectMedia project={project}/></CaseSection>
      <CaseSection title="Context"><h2>The context around the work.</h2><p>{project.context}</p></CaseSection>
      <CaseSection title="Problem"><h2>A workflow problem, first.</h2><p className="lead">{project.problem}</p></CaseSection>
      <CaseSection title="Product Thinking"><h2>Decisions before features.</h2><ol className="decision-list">{project.productThinking.map((item,i)=><li key={item}><span className="mono">0{i+1}</span><p>{item}</p></li>)}</ol></CaseSection>
      <CaseSection title="Solution"><h2>A system around the problem.</h2><p>{project.solution}</p></CaseSection>
      <CaseSection title="Workflow"><h2>{project.id === "bsc-studio" ? "Stage 01 / PRD → SOP" : "Make the flow explicit."}</h2><Workflow steps={project.workflow} note={project.workflowNote}/></CaseSection>
      <CaseSection title="Architecture"><h2>{project.id === "bsc-studio" ? "Two stages. Distinct boundaries." : "Give each layer a responsibility."}</h2><Architecture project={project}/></CaseSection>
      <CaseSection title="Engineering"><h2>How the system takes shape.</h2><div className="engineering-list">{project.engineering.map(item=><article key={item.title}><h3>{item.title}</h3><p>{item.description}</p><p className="scope-note">{item.scope}</p></article>)}</div><p className="tech-line">{project.technologies.join(" / ")}</p></CaseSection>
      <CaseSection title="Validation"><h2>Evidence, with a scope.</h2>{project.id === "hotscript" && <div className="validation-strip"><div><strong>0</strong><span>Provider calls</span></div><div><strong>32</strong><span>Synthetic samples</span></div><div><strong>0</strong><span>Human Gold</span></div><p>V1.3 P1 本批离线验证；不代表真实 AI 生产效果。</p></div>}<div className="case-evidence">{getEvidence(project.evidence).map(item=><EvidenceCard key={item.id} item={item}/>)}</div></CaseSection>
      <CaseSection title="Limitations"><h2>What is still unproven.</h2><ul className="limitations">{project.limitations.map(item=><li key={item}>{item}</li>)}</ul></CaseSection>
      <CaseSection title="Evolution"><h2>A product is a series of decisions.</h2>{project.id === "bsc-studio" && <p className="scope-note">V1 / V2 / V3 为叙事阶段标签，并非正式 release tag。阶段之间表示演进关系，不表示一条已完成流水线。</p>}<div className="evolution-timeline">{project.evolution.map(item=><article key={item.title}><div className="timeline-heading"><span className="mono">{item.label}</span><Badge status={item.status}/></div><h3>{item.title}</h3><dl><div><dt>Changed</dt><dd>{item.changed}</dd></div><div><dt>Why</dt><dd>{item.why}</dd></div><div><dt>Learning</dt><dd>{item.learned}</dd></div></dl></article>)}</div></CaseSection>
      <CaseSection title="Links"><h2>Continue exploring.</h2><div className="case-links">{project.githubUrl && <TextLink href={project.githubUrl} external>Public source on GitHub</TextLink>}{project.demoUrl && <TextLink href={project.demoUrl} external>Open Demo</TextLink>}<TextLink href="/engineering">Engineering evidence</TextLink><TextLink href="/fde">FDE practice</TextLink></div>{project.githubUrl && <p className="scope-note">公开仓库可访问；未确认与本地未提交功能一致。</p>}</CaseSection>
    </div></div><Link className="next-project" href={`/projects/${next.slug}`}><div><Eyebrow>NEXT CASE / {next.number}</Eyebrow><h2>{next.title}</h2></div><ArrowUpRight size={44}/></Link>
  </div>;
}
