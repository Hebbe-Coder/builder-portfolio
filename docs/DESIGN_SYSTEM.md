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

Breakpoints: 640, 768, 1024, 1280px. Tap targets ≥44px; visible keyboard focus; skip link; semantic headings and landmarks. Theme respects system preference until explicitly changed and persists locally. Mobile navigation supports Escape and closes on navigation. Framer Motion provides one restrained page entry; reduced-motion disables movement. No animation gates content visibility.

## Verification

Actual production browser checks at 1440, 1280, 768, 390px; both themes; keyboard, filters, menu, links, 404, console, overflow. Lighthouse targets P90/A95/BP95/SEO95, reported only after measurement.
