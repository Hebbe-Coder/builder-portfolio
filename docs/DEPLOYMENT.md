# Deployment and maintenance

## Application

Independent Next.js project. Install with `npm ci` using Node24, then `npm run build`. No business source, databases, AI providers, secrets or raw resumes are necessary. Build output is `.next`; use Vercel's detected Next.js preset. Default npm scripts support local development and production on3100.

## Origin and SEO

Set `NEXT_PUBLIC_SITE_URL` to the verified HTTPS origin. If absent, Vercel's project production URL or deployment URL supplies it. With no public origin, local metadata uses127.0.0.1:3100 while canonical/sitemap hosts are omitted; no public host is invented. Rebuild after origin changes. Check robots.txt, sitemap.xml, OG image and independent page metadata at the actual public host.

## Publication boundary

`.gitignore` excludes local raw audit evidence, original content placeholders, historical audit/plan, `.env`, build caches, QA reports and dependencies. `.vercelignore` excludes all docs, QA, scripts, local configuration and cached output. No approved project screenshots exist in this release; public diagrams are explanatory illustrations.

Before updating claims, review `docs/CONTENT_ACCEPTANCE.md`, add version/date/source/scope to evidence, and distinguish historical/implemented/simulated/unverified/planned. Update the public review date only when the content is reviewed. Resume/contact URLs remain null until selected; do not derive them automatically from old PDFs.

## Release checks

1. Run typecheck, lint, content guard and production build.
2. Start the production server; run browser QA and Lighthouse.
3. Review the staged Git file list, ensuring internal audit files and personal material are absent.
4. Commit and push the independent repository.
5. Use an authenticated Vercel project linked to GitHub for durable production hosting and future push deployments.
6. Verify the actual deployment status and public pages, links, metadata, sitemap and assets. A returned deployment URL alone is not proof of a successful production release.

## Rollback

Use the prior known-good Vercel deployment or redeploy the previous Git commit. Content is static; there is no database migration or user data to roll back. Keep new evidence records scoped instead of rewriting historical results.

## Current release state

V2 accepted and pushed to `https://github.com/Hebbe-Coder/builder-portfolio`, implementation commit `6cf0af1` (later documentation/deployment follow-up commits may follow).

Vercel account is not authenticated or permanently linked. Anonymous Next builder on Windows failed on a symlink privilege; prebuilt anonymous upload also rejected missing size metadata. The successful fallback uses this same site's static export, not a replacement site. `npm run build:static` generates `out/`, makes metadata routes explicitly static, and adds aliases for Next 16 segment-prefetch files on generic static hosting. The standard Next.js build remains the default and is recommended for a permanent Git-connected Vercel project.

Actual anonymous deployment reached READY. Vercel returned two aliases: its `vercel.app` alias redirected to login, while **`https://instant-tin-2tpp1l3.tmp.now` is publicly accessible**. Public core acceptance passed 5 routes ×4 widths,4 interaction suites,0 failures after repairing segment aliases. It expires **2026-11-18 15:31:16 Asia/Shanghai** unless claimed. This is a temporary preview, not a durable public production domain. The claim URL is delivered directly to the user and is not committed here.

To reproduce an optional static preview: set `NEXT_PUBLIC_SITE_URL` to the real origin, run `npm run build:static`, then deploy only `out/`. Without authentication, `vercel deploy out --temporary --prod --yes --no-wait --json` returns a temporary URL/claim URL. Anonymous credentials stay in ignored local `.vercel/` directories. Do not commit them. No login was performed on the user's behalf.

For durable hosting, claim the deployment in the user's Vercel account and connect the GitHub repository, or import the repository as a Next.js project. Set the actual permanent origin and redeploy before sharing it as a lasting portfolio URL.
