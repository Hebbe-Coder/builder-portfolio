import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
export type Insight = { slug:string; title:string; description:string; date:string; category:string; project:string; scope:string; content:string; readingTime:number };
const directory=path.join(process.cwd(),"content","insights");
export function headingId(text:string){return text.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,"-").replace(/^-|-$/g,"");}
export function getInsights():Insight[]{return fs.readdirSync(directory).filter(file=>file.endsWith(".mdx")).map(file=>{const {data,content}=matter(fs.readFileSync(path.join(directory,file),"utf8"));return {slug:file.replace(/\.mdx$/,""),title:String(data.title),description:String(data.description),date:String(data.date),category:String(data.category),project:String(data.project),scope:String(data.scope),content,readingTime:Math.max(2,Math.ceil(content.length/800))};}).sort((a,b)=>a.slug.localeCompare(b.slug));}
export function getInsight(slug:string){return getInsights().find(note=>note.slug===slug);}
export function getHeadings(content:string){return [...content.matchAll(/^## (.+)$/gm)].map(match=>({title:match[1],id:headingId(match[1])}));}
