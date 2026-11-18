import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/metadata";
import { projects } from "@/data/projects";
import { getInsights } from "@/lib/insights";
export default function sitemap():MetadataRoute.Sitemap { const origin=siteOrigin(); if(!origin)return []; return ["","/projects","/engineering","/fde","/about","/insights",...projects.map(p=>`/projects/${p.slug}`),...getInsights().map(n=>`/insights/${n.slug}`)].map(route=>({url:`${origin}${route}`,lastModified:"2026-11-18",changeFrequency:route===""?"weekly":"monthly",priority:route===""?1:route.startsWith("/projects/")?.9:.7})); }
