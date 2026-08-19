<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Design system

The full style reference is `DESIGN.md` at the repo root. Every token lives in
`src/app/globals.css` (`@theme`) and is available as a Tailwind utility. Read
`DESIGN.md` before making any visual decision.

## Non-negotiables

- **Never `#ffffff` as a background.** The canvas is Parchment (`bg-parchment`);
  cards and panels step up to Aged Paper (`bg-aged-paper`).
- **Elevation comes from color first.** Parchment → Aged Paper →
  `border-warm-taupe` outline. Only then the two approved shadows
  (`elevation-glow`, `elevation-float`). No small sharp drop shadows.
- **One accent.** `terracotta-seal` is reserved for exactly three things:
  primary CTAs, eyebrow labels, and active/selected states. Never body text,
  never text above 24px, never a large surface fill. Never add a second hue.
- **Shape family is fixed.** `rounded-button` (40px) for buttons,
  `rounded-card` (24px) for cards, `rounded-pill` for tags/pills/inputs,
  `rounded-nav` (12px) for the nav, `rounded-bar` (2px) for chart bars.
  No rectangular buttons, no square card corners.
- **Serif for headlines, sans for everything else.** `font-financier-display`
  on editorial headings only; `font-ftbase` for body, nav, buttons, UI labels.
  `font-fragment-mono` only for tiny all-caps badges.
- **The -0.023em tracking is global on `body`.** Do not re-apply it per element,
  and never let it reach the serif — the `text-heading*` / `text-display*` /
  `text-hero` steps already reset tracking to `normal`.

## Typography

Use the named scale, not raw pixel values: `text-eyebrow`, `text-body-sm`,
`text-body`, `text-body-lg`, `text-subheading`, `text-heading`,
`text-heading-lg`, `text-display`, `text-hero`, `text-display-xl`. Each step
carries its own line-height and letter-spacing.

The signature move is roman + italic *inside the same serif headline*: the
italic word is the emotional or surprising one, the roman words set up the
structure. Write it as `<h1>Testing is <em>easy</em></h1>` — the base layer
already renders `em` inside a heading at weight 300 italic. Never italicize a
whole sentence, a UI label, or body text; italic is for the serif at 34px+.

## Spacing and layout

Base unit is 8px, on Tailwind's stock 4px scale: `8→2 16→4 24→6 32→8 40→10
48→12 56→14 64→16 80→20 240→60`. Semantic aliases exist for the recurring
rhythms: `p-card`, `p-card-lg`, `gap-element`, `py-section`, `py-section-lg`,
`px-gutter`. Use `page-container` for the centered 1280px column with its outer
padding, and `max-w-prose` (720px) for reading-width text.

Sections alternate Parchment and Aged Paper in a slow tonal cadence — a gentle
rhythm, not a strict checkerboard — separated by 64–96px vertical gaps.

## Icons and imagery

Icons are outlined, 1.5–2px stroke, in Ink or terracotta — never filled, never
multicolor. The base layer applies `fill: none; stroke: currentColor` to every
inline `<svg>`; opt out for logo marks and illustrations with
`<svg data-illustration>`. Photography is warm-toned and human; hero images are
full-bleed under the `overlay-hero` scrim, lower sections contained at
`rounded-card`.
