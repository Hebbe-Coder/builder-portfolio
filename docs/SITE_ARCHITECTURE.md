# Site architecture

Phase 1 · 2026-11-18 · Asia/Shanghai. This implementation follows the latest 12-section brief, superseding the older suggested 16-section structure in the Phase 0 plan.

| Route | Purpose |
| --- | --- |
| / | V2: Hero → Selected Work → How I Build → Three Ways I Work → Engineering Evidence → FDE Practice → About → Contact |
| /projects | Three projects, category + technology + status filters |
| /projects/hotscript | Personal AI content workbench; scoped historical V1.3 P1 validation |
| /projects/bsc-studio | Historical PRD→SOP, separately followed by project-agent evolution |
| /projects/smart-station | SQLite parcel station implementation and separate PostgreSQL-oriented evolution |
| /engineering | Capability → project → purpose → evidence → limitation |
| /fde | Personal practice and methodology; no claimed customer deployment |
| /about | Project-centered profile, resume-sourced education, conditional public contact/resume |
| /insights | MDX product and engineering notes |
| /insights/[slug] | Note, source scope, contents, reading progress, related project |
| unknown routes | Custom 404 with working return links |

Project sections: Overview, Context, Problem, Product Thinking, Solution, Workflow, Architecture, Engineering, Validation, Limitations, Evolution, Links. Sources are sanitized relative references. Historical tests are not rerun for this site and never certify the current business-system source.

Server components render content, metadata and diagrams. Small client components handle menu/theme, motion, filters, article controls and media. There is no business database, AI provider call, visitor tracking or form backend. MDX is trusted local authored content, compiled at build time; it is not remote user input.

Public origins come from NEXT_PUBLIC_SITE_URL or Vercel-provided production configuration. Without an origin, no invented canonical/sitemap host is emitted. Internal audit records are local documentation, excluded from Git/deployment. Robots, sitemap, OpenGraph and JSON-LD describe this portfolio, not deployments of the underlying projects.
