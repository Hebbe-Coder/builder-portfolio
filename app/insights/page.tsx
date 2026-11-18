import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getInsights } from "@/lib/insights";
import { Eyebrow } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
export const metadata=pageMetadata("Insights", "Build in Public / Product Engineering Notes。基于真实项目审计材料整理的产品与工程笔记。", "/insights");
export default function InsightsPage(){const notes=getInsights();return <div className="shell"><section className="page-hero"><Eyebrow>BUILD IN PUBLIC / PRODUCT ENGINEERING NOTES</Eyebrow><h1>Notes from<br/>the workbench<span className="accent">.</span></h1><p>Decisions, open questions and the systems behind the product.<br/>基于项目审计材料整理的笔记。观察、方法建议与未验证结果分别说明。</p></section><div className="insights-list">{notes.map((note,i)=><article className="insight-row" key={note.slug}><span className="mono muted">{String(i+1).padStart(2,"0")}</span><div><div className="insight-meta"><span>{note.category}</span><time dateTime={note.date}>{note.date}</time><span>{note.readingTime} min read</span></div><h2><Link href={`/insights/${note.slug}`}>{note.title}<ArrowUpRight size={24}/></Link></h2><p>{note.description}</p></div></article>)}</div></div>;}
