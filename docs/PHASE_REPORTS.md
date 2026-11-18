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

## React Bits V2 — Design, Home gate and site acceptance

**Completed:** Adapted the existing implementation to the new brief. Pinned four official React Bits sources with full license/provenance; isolated adaptive wrappers; default light; new split hero, immediate selected work, six-stage build loop, evidence-linked work modes and three FDE entries. Home gate passed before changing secondary pages. Project titles and cards now share wrappers, evidence uses six labelled semantic colors, FDE has seven selectable stages with five content fields, About follows learning/career/project/engineering/next-work direction. Articles remain minimal.

**Evidence:** Type/lint/49-file content guard/build passed. 64 light route checks plus dark matrix, four interaction suites, 117 links/anchors, zero failures. Eight production normal/reduced-motion combinations passed additional React Bits/FDE tests. Visual review corrected a selected-list overlay. Ten freshly measured Lighthouse mobile routes each scored 100 in all four categories; see QA_REPORT.md for scope and limitations.

**Remaining:** Push accepted V2 and resolve external hosting. Resume/contact and approved project media remain publication selections, with absent links hidden.

**Risks:** No live business-app validation is claimed. Single-machine mobile lab results do not cover public-network conditions or every assistive technology. Original audit, data-origin and migration caveats remain authoritative.

## Phase 7 — Repository and temporary Vercel preview

**Completed:** Pushed accepted V2 to the independent GitHub repository. Added a reproducible optional static-export build after anonymous Next-on-Windows symlink failure and anonymous prebuilt upload rejection. Corrected Next segment-prefetch file aliases for generic hosting. Vercel API confirmed READY, and the public tmp.now alias passed the 20-check core gate and four interaction suites. Public sitemap/robots/OG asset returned 200; sitemap and canonical use the actual public alias. Client navigation and FDE step selection had zero captured errors. A static-host header explicitly identifies the extensionless Open Graph image as PNG.

**Remaining:** The anonymous deployment expires 2026-11-18 15:31:16 Asia/Shanghai unless claimed. Permanent account ownership, Git integration and lasting domain require the user to claim/sign in. No permanent production URL is claimed. The separate vercel.app alias required login, so it is not the public preview link delivered to visitors.

**Evidence and operation:** DEPLOYMENT.md records the actual outcome and `npm run build:static` fallback. Standard Next build also re-passed. No business source, databases, raw audits, resumes, anonymous credentials or claim tokens were committed. Contact/resume and approved media remain absent until selected.
