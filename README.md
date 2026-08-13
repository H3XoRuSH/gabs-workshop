# Gab's Workshop

Portfolio site for Rae Gabriel "Gab" Samonte — built with [Astro](https://astro.build).
Neo-brutalist design language shared with [gabs-arcade.xyz](https://gabs-arcade.xyz):
warm off-white + dotted grid, hard offset shadows, thick black borders, bold all-caps
display type, color-coded card accents.

## Quickstart

```sh
npm install
npm run dev      # local dev server
npm run check    # type-check (astro check)
npm run build    # static production build → dist/
npm run preview  # serve the production build locally
```

**Node version:** built and tested on Node 20 (Astro 5.x — the newest Astro major that
supports Node 20). Astro 6/7 require Node ≥ 22.12; when you upgrade Node, bump `astro`
in `package.json` and remove the `sharp` override.

## Structure

```
src/
  content.config.ts              # content collection schema (projects)
  content/projects/*.md          # every project = one markdown file
  components/
    Card.astro                   # the shared neo-brutalist card (top accent band + hard shadow)
    sections/                    # one component per page section (Hero, Projects, ...)
  layouts/BaseLayout.astro       # fonts, sticky header, footer
  styles/global.css              # design tokens + base styles
  pages/index.astro              # the single page, sections in order
public/
  CV - Samonte, Rae Gabriel.pdf  # self-hosted resume (synced from the H3XoRuSH/H3XoRuSH repo)
```

## Adding a project

Drop a markdown file into `src/content/projects/` with frontmatter matching the schema
in `src/content.config.ts`. Set `featured: true` (full card, max 5) or `featured: false`
(compact "More builds" strip entry). No component edits needed.

## Deploying

The build is fully static (`dist/`). Before deploying, set `site` in `astro.config.mjs`
to the production URL. Works on any static host (Cloudflare Pages, Vercel, Netlify,
GitHub Pages).

## Design tokens

Hardcoded as CSS variables in `src/styles/global.css` — see `docs/plan.md` for the full
design brief.
