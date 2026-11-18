import type { MetadataRoute } from "next";
export const dynamic = "force-static";
import { siteOrigin } from "@/lib/metadata";
export default function robots():MetadataRoute.Robots{const origin=siteOrigin();return {rules:{userAgent:"*",allow:"/"},...(origin?{sitemap:`${origin}/sitemap.xml`,host:origin}:{})};}
