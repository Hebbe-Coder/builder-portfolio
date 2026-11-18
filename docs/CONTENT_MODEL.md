# Content model and publication rules

Phase 1 · 2026-11-18 · Asia/Shanghai.

`types/content.ts` defines Project, Evidence, Media and Evolution. `data/projects.ts` contains three cases; `data/evidence.ts` holds scoped records; `data/profile.ts` owns public identity and nullable contact URLs; `data/capabilities.ts` maps engineering to project proof; `data/navigation.ts` owns navigation. Notes live in `content/insights/*.mdx` with frontmatter and a project source scope.

EvidenceStatus = verified | implemented | simulated | historical | planned | unverified. Each record has id, title, status, description, source, version, date, scope. A record describes a bounded claim, not a whole-product quality rating. Historical records retain dates and explicitly state that they were not rerun. Public repository availability does not prove parity with uncommitted source.

Project fields include id, slug, title, subtitle, description, category, status, role, context, problem, productThinking, solution, workflow, architecture, technologies, evidence, limitations, evolution, screenshots, video, githubUrl, demoUrl. All media metadata includes project, version, source, status, description, dataOrigin and publicReady; only publicReady assets render. Missing media/URLs remain null or empty arrays.

Display selection: HotScript = historical V1.3 P1 validation plus current drift caveat; BSC = historical PRD-to-SOP and separately current S1/P0 project-agent direction; station = SQLite implementation plus separately scoped 2026-09-24 refactor tests. These are editorial display scopes, not new releases. BSC V1/V2/V3 are narrative stages, not release tags.

Resume, phone, email and profile GitHub remain null pending public selection. No source screenshots are approved for publication. Use truthful explanatory diagrams instead. Do not expose internal absolute paths, raw resumes, business source or raw evidence files. No unverified efficiency metrics, customer claims or AI quality claims. Notes are authored from audit material and clearly distinguish recommendations from observed outcomes.
