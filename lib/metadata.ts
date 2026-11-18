import type { Metadata } from "next";
export function siteOrigin(): string | undefined {
  const vercelOrigin = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  const configured = process.env.NEXT_PUBLIC_SITE_URL || (vercelOrigin ? `https://${vercelOrigin}` : undefined);
  if (!configured) return undefined;
  try { const url = new URL(configured); return ["https:", "http:"].includes(url.protocol) ? url.origin : undefined; } catch { return undefined; }
}
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const origin = siteOrigin();
  return {
    title, description,
    alternates: origin ? { canonical: `${origin}${path}` } : undefined,
    openGraph: { title: `${title} — BUILDER.`, description, type: "website", ...(origin ? { url: `${origin}${path}` } : {}) },
    twitter: { card: "summary_large_image", title: `${title} — BUILDER.`, description },
  };
}
