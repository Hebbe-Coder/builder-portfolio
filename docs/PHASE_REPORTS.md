# BUILDER. implementation reports

Dates use Asia/Shanghai. Implementation started 2026-11-18. Phase 0 raw evidence remains local and is excluded from publication.

## Phase 1 — Design and content foundation

**Completed:** Design tokens, typography, breakpoints, component and interaction rules; site architecture and typed content model. Structured project/evidence/profile/navigation/capability data. Theme, navigation, links, evidence cards, diagrams and layout primitives.

**Evidence:** DESIGN_SYSTEM.md, SITE_ARCHITECTURE.md, CONTENT_MODEL.md; initial strict TypeScript check passed. Three cases use the existing audit baseline, with nullable unpublished links/media.

**Remaining:** Public resume/contact and approved screenshots need owner selection; they are not required for the layout.

**Risks:** Historical validations do not certify current business-project source. Local raw audit records contain private paths and must stay excluded.

**Next:** Core home, project index and case-study implementation, followed by actual browser inspection.

## Phase 2 — Core portfolio

**Completed:** Home in the specified section order, project index with three intersecting filters and reset/empty state, three case studies with twelve sections, diagrams and evolution timelines, evidence scopes, custom 404. No unpublished screenshot, false Demo or resume link.

**Evidence:** Production build and TypeScript passed before secondary page work. Actual in-app browser homepage inspected. Automated real Edge checks found accessible-name and muted-text contrast problems, which were fixed. Local QA reports and screenshots live under ignored `qa/`.

**Remaining:** Final all-route and Lighthouse results are recorded in later phases. Core gate passed:20 route/width checks,4 interaction suites,0 failures across1440/1280/768/390.

**Risks:** The temporary core build links to secondary routes that are implemented in subsequent phases; it is not a public release.

**Next:** Continue only after core responsive/browser checks to Engineering + FDE, then About + MDX notes.

## Phase 3 — Engineering and FDE

**Completed:** Six engineering capability mappings with purpose, implementation, linked project, evidence and limits; AI-assisted development workflow. FDE discovery-to-iteration method and three personal-project cases, each with problem/context/approach/implementation/validation/limitation.

**Evidence:** Strict TypeScript, lint and production build passed. Every capability references an existing project and scoped evidence record. No customer or production-delivery claim.

**Remaining:** Full-site browser and performance acceptance in Phase6.

**Risks:** Project implementations and historical tests cannot establish real customer value. FDE page states this boundary.

**Next:** About and MDX notes.

## Phase 4 — About and insights

**Completed:** About with resume-sourced context, three career directions, conditional contact/resume. Local MDX system and seven complete source-scoped notes, contents links, copy feedback, related projects, reading progress. Metadata and structured data.

**Evidence:** All seven notes statically prerendered in a successful22-route production build; TypeScript and lint passed. Public resume/contact remain null.

**Remaining:** Final browser interaction checks; publication choices for personal PDF/contact remain open.

**Risks:** Notes are editorial syntheses of audited material, not additional firsthand experiments. They state this explicitly.

**Next:** Content truth review and full browser acceptance.

## Phase 5 — Content truth acceptance

**Completed:** Reviewed names, versions, architecture, technology, status, tests, data, links, outcomes and limits. Recorded case-by-case boundaries in CONTENT_ACCEPTANCE.md. Added automated public-content guard.

**Evidence:** Initial35-file scan returned0 failures. Manual review confirmed all media unapproved, absent links null, HotScript synthetic boundaries prominent, BSC stages separate, parcel station implementation/refactor distinct.

**Remaining:** Resume/contact and screenshots are explicit publication TODOs; no unapproved material is rendered.

**Risks:** String scanning complements manual review; it cannot prove factual correctness. Historical business-system records were not rerun.

**Next:** Full route, theme, responsiveness, navigation and Lighthouse checks.

## Phase 6 — Browser and quality acceptance

**Completed:**16-page responsive matrix at1440/1280/768/390, corresponding dark pages, interactive filters/menu/theme/404/article controls/keyboard, internal links and anchors. Visual review of desktop/mobile core and secondary pages. Lighthouse and final filter regression.

**Evidence:**64 light route checks + corresponding dark checks,4 interaction suites,114 internal links/anchors,0 failures. All10 Lighthouse representative routes met P≥90/A≥95/BP≥95/SEO≥95; actual scores P90–99 and all other categories100. Type/lint/content/build passed. Details and limitations in QA_REPORT.md.

**Remaining:** Public-network checks after deployment; optional manual screen-reader user testing.

**Risks:** Lab scores fluctuate; automated accessibility cannot prove every assistive-technology experience. Website QA does not revalidate business systems.

**Next:** Independent GitHub repository, push, Vercel deployment and public verification.
