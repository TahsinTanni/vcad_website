# VCAD — Web Developer Code Test

Next.js (App Router) + TypeScript + Tailwind CSS build of the VCAD site.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Stage plan

- **Stage 1 (this commit)** — project scaffold, Tailwind design tokens, Inter +
  Material Symbols fonts, shared `Header`/`Footer` components wired into the
  root layout, placeholder homepage to sanity-check the tokens render
  correctly.
- **Stage 2** — Homepage (`/`): hero, Schools of Study carousel, By the
  Numbers stats.
- **Stage 3** — Course data model (`/data/courses.ts`) + Explore Courses page
  (`/courses`): asymmetric card grid, school filter tabs, loading/empty
  states.
- **Stage 4** — Course Details page (`/courses/[slug]`): key details,
  admissions card, map, tabs, student work gallery.
- **Stage 5** — Polish, responsive pass, deploy.

## Design tokens note

The brief's token sheet (`aaa.txt`) lists a smaller set of brand colors (Base
`#030A2E`, Pink `#FF379E`, Cyan `#00FFD2`, etc). The exported design frames in
the assessment zip (`code.html` + `screen.png` per page) render with a
different, more granular "Academic Noir" Material-3-style palette (`surface`
`#111318`, `primary-container` `#030a2e`, `tertiary` `#00e0b8`, ...).

I pixel-sampled the page screenshots to check which set is actually rendered
(e.g. the section background sampled to `#111318` and the footer to `#0c0e13`
— both exact matches to the M3 token set, not the brand sheet). So `tailwind.config.ts`
uses the token names/values from the exported frames, since those are what's
literally on the design canvas. Radii and type scale match both sources
exactly, so there's no conflict there. Flagging this here since it's the kind
of thing the brief asks to inspect rather than guess.

## Progress log

- ✅ Stage 1 complete.
