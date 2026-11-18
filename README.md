# BUILDER. — AI Product Builder Portfolio

An editorial portfolio for 曾子健, AI Product Builder. Three source-grounded case studies connect product thinking, AI/full-stack engineering and personal FDE practice. English headings with Chinese case analysis, warm-white/dark themes, responsive diagrams and scoped evidence.

## Run

Node.js24 LTS, npm11. Use `npm ci`, then `npm run dev`. Local preview uses http://127.0.0.1:3100. For production: `npm run build`, then `npm start`.

Next.js App Router / React / strict TypeScript / Tailwind4 / official React Bits source / Framer Motion / Lucide / local MDX. Geist is self-hosted; no remote font fetch. No AI provider, business database, tracking service or contact-form backend is required. Light is the default; dark is an explicit persisted choice.

## Content

- `/`: hero, selected work, How I Build, Three Ways I Work, evidence, FDE, about and contact.
- `/projects`: category/technology/status filters and three twelve-section cases.
- `/engineering`, `/fde`, `/about`: evidence-based capability and practice.
- `/insights`: seven source-scoped MDX notes, contents, code copy and reading progress.

Edit `data/profile.ts` for public identity and optional links; `data/projects.ts`, `data/evidence.ts`, `data/capabilities.ts` for cases and proof. Notes live under `content/insights`. Resume/contact/profile GitHub remain null until public selection; unpublished media never renders. BSC is the only verified public project repository link. Business-system tests remain historical records, not tests rerun by this portfolio.

The portfolio is an independent presentation layer. It does not contain HotScript, BSC or parcel-station application source, databases or runtime assets. Internal audit records, private paths, unselected resumes and QA output are excluded from Git and deployment.

## Check

`npm run typecheck`, `npm run lint`, `npm run test:content`, `npm run build`. Run the production server, then `npm run test:browser` (installed Microsoft Edge required) and `node scripts/lighthouse.mjs`. QA artifacts are local under ignored `qa/`.

V2 local acceptance:64 route/width checks plus corresponding dark-theme checks,4 interaction suites and117 internal links/anchors passed. Eight additional normal/reduced-motion combinations cover React Bits career, build and FDE interactions; run `node scripts/react-bits-qa.mjs`. Lighthouse mobile simulation for10 representative routes: all four categories100 in this run. Mobile uses static alternatives; these are local lab results, not desktop animation or public-network field data. See [QA report](docs/QA_REPORT.md), [React Bits integration](docs/REACT_BITS.md) and [phase reports](docs/PHASE_REPORTS.md).

## Maintain and deploy

[Design system](docs/DESIGN_SYSTEM.md) · [Site architecture](docs/SITE_ARCHITECTURE.md) · [Content model](docs/CONTENT_MODEL.md) · [Content acceptance](docs/CONTENT_ACCEPTANCE.md) · [Deployment](docs/DEPLOYMENT.md)

Set `NEXT_PUBLIC_SITE_URL` to the verified public origin. Vercel-provided production/deployment origins are also supported. Local builds use a local metadata base; canonical/sitemap hosts are omitted until an actual public origin is available. Rebuild after changing origins or content.

Source repository: https://github.com/Hebbe-Coder/builder-portfolio. Standard Vercel hosting uses the Next.js preset. Optional `npm run build:static` creates `out/` with static-hosting segment aliases; see DEPLOYMENT.md. The initial anonymous preview is temporary and requires account claiming for durable ownership; it is not a permanent portfolio domain.
