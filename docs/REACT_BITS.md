# React Bits integration · V2

Source: [DavidHDev/react-bits](https://github.com/DavidHDev/react-bits), pinned at `d01aa914dcbe76da8b2923ebf872b5c8b1066e4c` (2026-11-18 integration). Exact upstream source URLs and original SHA-256 hashes are in `react-bits-provenance.json`. This is official source integration, not an invented npm package or an imitation of the demos.

The complete upstream MIT + Commons Clause license is preserved in `components/react-bits/LICENSE.md`. Components are used within this portfolio website; they are not offered as a standalone component product.

| Component | Purpose and interaction | Alternative | Performance and readability |
| --- | --- | --- | --- |
| BlurText | Introduce the hero key phrase and project names with a short blur transition | Server-rendered text | Lazy; nearby desktop only; opacity remains 1; mobile and reduced motion remain static |
| RotatingText | Connect three career directions with concrete project practice; buttons select a direction and a pause control stops rotation | Static selected title | 6.5-second interval; pauses outside viewport/hidden document; no automatic motion on mobile or reduced motion; stable title area |
| SpotlightCard | Give all project rows the same gentle pointer/focus emphasis | Ordinary project row | Lazy and nearby only; no ambient animation, grain or flare; no essential facts hidden on hover |
| AnimatedList | Explore build stages, capability evidence and FDE methodology using hover, click or arrow keys | Native buttons with selected state | Shared lazy module; no entrance cascade; motion limited to selection indicator; no automatic scrolling/carousel; full text stays readable |

Wrappers own tokens, adaptive behavior and accessibility. Business content lives under `components/home`, `components/projects`, `components/fde` and `data/`. No canvas, WebGL or remote visual assets are needed. No effect stands in for a product screenshot or a verified product capability.

Local adaptations: use the existing `framer-motion` dependency rather than introducing a second motion runtime; BlurText uses an inline span inside semantic headings; RotatingText shuffle is deterministic for hydration and its initial index preserves selected career state when adaptive effects remount; AnimatedList drops demo defaults and its unused icon dependency, adds an accessible list label and selection-change callback; wrappers use Lucide consistently. Vendor files retain upstream style and are excluded from project lint conventions, but remain part of strict type checks, builds and browser checks.

Motion budgets: Home = 2 hero effects + 3 project spotlights + 2 interactive lists + navigation scroll state (8). Project detail = title + navigation (2). Engineering = navigation (1). FDE = list selection + navigation (2). Articles = reading progress + navigation (2). Ordinary hover feedback is not an autonomous effect. Mobile/reduced motion do not mount the animated variants.

Home gate: `npm run dev` actually started; four widths × two motion modes passed in `qa/v2/react-bits-report.json`, including career selection, pause, build-loop keyboard/button selection, overflow, browser errors and scoped axe scans. Visual screenshots reviewed at desktop/mobile before secondary page changes. Full V2 verification is recorded separately in QA_REPORT.md; initial-version scores do not certify this revision.
