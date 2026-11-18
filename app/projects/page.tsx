import { projects } from "@/data/projects";
import { Eyebrow } from "@/components/ui";
import { ProjectFilter } from "@/components/project-filter";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata("Selected work", "三个个人项目：HotScript、BSC Studio 与智慧驿站。从问题、设计、工程到验证边界。", "/projects");
export default function ProjectsPage() { return <div className="shell"><section className="page-hero"><Eyebrow>PROJECT INDEX / 01—03</Eyebrow><h1>Different problems.<br/>Same builder’s mindset<span className="accent">.</span></h1><p>Explore the product decisions, systems and evidence behind the work.<br/>每个案例都保留实现范围、历史验证与尚未关闭的问题。</p></section><h2 className="sr-only">Project case studies</h2><ProjectFilter projects={projects}/></div>; }

