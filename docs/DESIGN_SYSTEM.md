# BUILDER. Design system

Phase 1 · 2026-11-18 · Asia/Shanghai

An editorial studio portfolio for a recruiter reading in two to three minutes. The primary reading path is positioning → project problem → implementation → evidence → limits.

## Tokens

Warm-white canvas #F7F7F5, ink #111111, muted #60605C, rule #DDDDD7, accent #2052D3. Dark canvas #0A0A0A, ink #F5F5F5, muted #ABABA5, rule #30302D, accent #8BAAFF. All components use semantic CSS variables. Evidence has distinct labels and shapes as well as color; status never relies on color alone.

Geist Variable is served locally. Chinese uses system sans-serif. Headlines use tightly tracked fluid sizes; body is 16–18px with 1.7 line height. Long-form content stays within 72 characters. Maximum page width 1280px, adaptive gutters 24–64px. Spacing scale 4/8/12/16/24/32/48/64/96/128px.

## Composition

The hero is oversized typography beside a small, explicitly labelled system diagram. Selected work uses numbered, asymmetric editorial rows. Project covers are explanatory diagrams, never invented application screenshots. Details use a sticky desktop contents rail, visible evidence scope, and separate architecture/evolution narratives. On mobile, rails become wrapping section links and diagrams become vertical flows.

## Components

Header, mobile navigation, theme control, footer, section heading, text link, project row, category/technology/status filters, evidence badge/card, workflow diagram, architecture diagram, evolution timeline, conditional media, article prose, table of contents, copy control and reading progress. Empty filter states have a reset action. Unknown external links and unpublished media do not render buttons.

## Interaction and access

Breakpoints: 640, 768, 1024, 1280px. Tap targets ≥44px; visible keyboard focus; skip link; semantic headings and landmarks. Theme defaults to light; explicit dark preference persists locally. Mobile navigation supports Escape and closes on navigation. React Bits wrappers provide selective interaction; reduced-motion disables movement. No animation gates content visibility.

## React Bits V2 revision

The latest brief supersedes the original homepage composition: Hero → Selected Work → How I Build → Three Ways I Work → Engineering Evidence → FDE Practice → About → Contact. Hero uses left narrative and right interactive discipline diagram. Default theme is light; explicit dark preference persists. Sticky navigation becomes lightly blurred only after scroll. No canvas/WebGL background is necessary.

Official React Bits components are pinned, licensed and isolated under components/react-bits/vendor. Business wrappers own adaptive behavior and tokens. BlurText introduces the key phrase once; RotatingText connects career directions to visible project evidence with pause control; SpotlightCard provides shared pointer/focus emphasis; AnimatedList exposes build stages and capability-to-project mappings. Every essential fact remains readable without hovering or animation.

Homepage visible effect budget: two hero text effects, three project spotlights, one build-list interaction, one capability-list interaction and one navigation scroll state = eight. Project details ≤four, engineering ≤five, FDE ≤five, articles ≤two. Mobile/reduced-motion use static text, no pointer tracking, no auto rotation and no entrance blur. Rotation pauses offscreen and when the document is hidden. Sources and local adaptations are recorded in REACT_BITS.md.

Evidence tokens: verified green, implemented blue, simulated ochre, historical gray, unverified orange and planned purple; dark variants preserve contrast. Text labels and symbols always accompany color.

## Verification

Actual production browser checks at 1440, 1280, 768, 390px; both themes; keyboard, filters, menu, links, 404, console, overflow. Lighthouse targets P90/A95/BP95/SEO95, reported only after measurement.
