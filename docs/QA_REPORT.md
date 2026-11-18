# Local acceptance report

2026-11-18 · Asia/Shanghai. Production Next.js16.4.6 / React19.3.1 build; Node24.14.0; installed Microsoft Edge. This report validates the portfolio website, not the three underlying business systems.

## Engineering

- Strict TypeScript passed.
- ESLint passed without warnings after correcting the PostCSS config export.
- Public content guard:35 source/MDX files,0 failures.
- Production build:22 generated routes including metadata assets, robots and sitemap;7 MDX notes and3 project cases.
- Metadata uses a local base in local builds; canonical and sitemap origin require a real configured or Vercel-provided host. Public deployment metadata needs separate verification.

## Browser

Core gate before secondary pages:5 routes ×4 widths =20 checks,4 interaction suites,0 failures. Actual in-app browser homepage inspected; desktop/mobile screenshots reviewed.

Full acceptance:16 content routes ×1440/1280/768/390 =64 light-theme route checks, plus corresponding dark-theme route checks. HTTP200, single H1, no horizontal overflow, no captured console/runtime errors, and no WCAG2A/AA/2.1AA automated violations.114 unique internal links and anchors checked. All7 article routes included.

Interactions: category + technology filters, empty combination, reset, theme persistence, mobile open/close/Escape/navigation, custom404 status and recovery, article contents, successful code copy, reading progress, keyboard skip link. Reduced-motion used in the matrix; final motion smoke check uses normal preference as well. No public screenshot/video controls were exercised because no media is approved.

Issues fixed: accessible names conflicting with visible labels; low-contrast sidebar numbers; mobile filter widths; missing heading level in project index. Final filter regression at all4 widths uses full axe checks and confirms ≥162px select widths on390px mobile.

## Lighthouse

Production localhost, Lighthouse13.6.0, Edge headless, mobile390×844, simulated throttling. One final lab run per route; no real-user field-data claim. First run found BSC Performance89. Removing the global animation wrapper and restricting Framer Motion to the homepage reduced unnecessary shared work; content remained intact.

| Route | Performance | Accessibility | Best practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| / |97|100|100|100|
| /projects |99|100|100|100|
| /projects/hotscript |97|100|100|100|
| /projects/bsc-studio |99|100|100|100|
| /projects/smart-station |94|100|100|100|
| /engineering |90|100|100|100|
| /fde |98|100|100|100|
| /about |94|100|100|100|
| /insights |96|100|100|100|
| /insights/agent-workflows |97|100|100|100|

FCP/LCP0.8–1.2s in these local runs; CLS0–0.001; TBT110–410ms. Scores vary with machine load. Remaining opportunities include shared framework JS, legacy compatibility JS and main-thread work; targets passed without deleting case content.

Raw screenshots, JSON reports and Lighthouse traces remain in ignored `qa/`, including core-browser-report.json, full-browser-report.json, lighthouse-summary.json and filter-layout-final.json. They are local verification artifacts, not business metrics or publicly approved application screenshots.

## Limits

Automated accessibility is not a substitute for assistive-technology user testing. No screen reader session, real public-network performance measurement or business-app integration test is claimed. No analytics/visitor data was collected. Public resume/contact, approved screenshots and business validation gaps remain content selections.
