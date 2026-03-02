# AGENTS.md

## Project Overview

Personal portfolio/blog site built with **Astro 5** — static site generator with zero JS by default. Uses **MDX** for blog posts via content collections, **React islands** (`client:only="react"`) for interactive algorithm demos, and **styled-components** only inside React island components. Font: Monaspace Neon (monospace). Node 18.17.0 (see `.nvmrc`).

## Build / Dev / Test Commands

```bash
# Development
yarn dev                  # Start Astro dev server (localhost:4321)

# Build
yarn build                # Production build (static output to dist/)

# Preview production build
yarn preview              # Serve dist/ locally

# Deploy
yarn deploy               # node scripts/deploy.js
```

**No test suite.** No Jest, no Vitest, no linter configured. Verify changes with `yarn build`.

## Project Structure

```
src/
├── assets/
│   └── fonts/
│       └── MonaspaceNeon-Variable.woff2   # Self-hosted variable font
├── components/
│   ├── PostCard.astro         # Blog post link (date + title)
│   ├── ProjectCard.astro      # Project card (terminal-style)
│   ├── Nav.astro              # Site navigation (unused — nav is in Base layout)
│   ├── Footer.astro           # Site footer (unused — footer is in Base layout)
│   └── demos/                 # React islands for interactive demos
│       ├── MinimaxAnimation.jsx
│       ├── TreeAnimation.jsx
│       ├── PlayBar.jsx        # Playback controls (play/pause/step)
│       ├── AlphaBetaDemo.jsx  # Page-level wrapper for alpha-beta demo
│       ├── DFSDemo.jsx        # Page-level wrapper for DFS demo
│       ├── TreeDemo.jsx       # Interactive tree builder (used in MDX)
│       ├── Arrow.jsx          # SVG arrow component
│       ├── TextLabel.jsx      # SVG text label
│       ├── Button.jsx         # Styled button
│       ├── ButtonGroup.jsx    # Button group wrapper
│       ├── minimax.js         # Minimax algorithm logic (pure)
│       ├── dfs.js             # DFS algorithm logic (pure)
│       └── assets/            # SVG icons for PlayBar
├── content/
│   └── blog/                  # MDX blog posts (content collection)
│       ├── welcome.mdx
│       ├── minimax.mdx
│       ├── minimax-continued.mdx   # Has interactive React components
│       └── react-svg-tree.mdx      # Has interactive React components
├── data/
│   └── projects.ts            # Project data (typed)
├── layouts/
│   └── Base.astro             # HTML shell (nav, main, footer, global CSS)
├── pages/
│   ├── index.astro            # Homepage (hero + projects + blog preview)
│   ├── contact.astro          # Contact page
│   ├── blog/
│   │   ├── index.astro        # Blog listing
│   │   └── [...slug].astro    # Individual blog post
│   └── demos/
│       ├── index.astro        # Demo listing
│       ├── alpha-beta.astro   # Alpha-beta pruning demo
│       └── depth-first-search.astro
├── styles/
│   └── global.css             # @font-face, reset, CSS custom properties
└── utils/                     # Pure utility functions
    ├── getArrowCoordinates.js
    ├── getRandomInt.js
    └── getRandomTree.js

content.config.ts              # Astro content collection schema
astro.config.mjs               # Astro config (MDX, React, base path)
_legacy/                       # Old Next.js files (preserved, not used)
```

## Code Style

### Language & Extensions

- **Astro components** (`.astro`) for all pages and static components
- **React** (`.jsx`) only for interactive demo components (islands)
- **TypeScript** (`.ts`) for data files and content config
- **MDX** (`.mdx`) for blog posts in `src/content/blog/`
- **Plain CSS** — no CSS framework, no CSS-in-JS for Astro components
- **styled-components** used only inside React island components (`src/components/demos/`)

### Formatting

- **2-space indentation** throughout
- **Single quotes** for JS string literals
- **No linter** — no ESLint, Prettier, or Biome configured

### Styling

- **Scoped `<style>`** in `.astro` files — all Astro component styling
- **CSS custom properties** defined in `src/styles/global.css`:
  - `--color-bg: #0a0a0a` (near-black background)
  - `--color-text: #ededed` (off-white text)
  - `--color-text-muted: #888` (gray secondary text)
  - `--color-accent: #5e5ce6` (muted indigo — links, hover)
  - `--color-border: #222` (subtle borders)
  - `--font-mono: 'Monaspace Neon', 'SF Mono', 'Fira Code', monospace`
  - `--max-width: 72ch` (content column width)
- **No Tailwind, no CSS modules, no Rebass**
- Font: **Monaspace Neon** (variable, self-hosted at `src/assets/fonts/`)

### Astro Components

```astro
---
// Frontmatter: imports, data fetching, props
import Base from '../layouts/Base.astro';
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
---

<Base title="Page Title">
  <section>
    <h1>Content</h1>
    <a href={`${base}/blog`}>Link</a>
  </section>
</Base>

<style>
  section { padding: 4rem 0; }
</style>
```

### React Islands (demos only)

```jsx
// src/components/demos/MyDemo.jsx
import React from 'react';
import styled from 'styled-components';

class MyDemo extends React.Component { /* ... */ }
export default MyDemo;

// Usage in .astro:
// <MyDemo client:only="react" />
```

- **`client:only="react"`** — skips SSR, renders client-side only
- Demo components are React **class components** (legacy, don't convert)
- SVG imports use `?url` suffix: `import icon from './assets/icon.svg?url'`

### Links & Base Path

- Base path: `/personal-site` — all routes are prefixed
- **Always** strip trailing slash and add explicit slash:
  ```js
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  // Then: `${base}/blog`, `${base}/demos`, etc.
  ```

### Content Collections (Blog)

- Schema defined in `content.config.ts` (title, date, author, description)
- Posts in `src/content/blog/*.mdx` with YAML frontmatter
- Use `getCollection('blog')` and `render(post)` from `astro:content`
- Post IDs use `post.id` (not `post.slug`) in Astro 5

### Naming

- **Files**: PascalCase for components (`ProjectCard.astro`, `PlayBar.jsx`), camelCase for utils
- **CSS**: kebab-case class names
- **Variables/functions**: camelCase

## Key Technical Details

- **Static output**: `astro.config.mjs` sets `output: 'static'` — no SSR, no API routes
- **Base path**: `/personal-site` — configured in `astro.config.mjs` as `base`
- **Site URL**: `https://zacharymarion.github.io`
- **React integration**: `@astrojs/react` — only used for demo island components
- **MDX integration**: `@astrojs/mdx` — blog posts use content collections
- **Font**: Monaspace Neon variable (weight 200–800), loaded via `@font-face` in global.css
- **Interactive MDX**: `minimax-continued.mdx` and `react-svg-tree.mdx` embed React components with `client:only="react"`
- **Legacy files**: Old Next.js code preserved in `_legacy/` directory (not used in build)
- **npm dependency**: `react-svg-tree` used by demo components for tree rendering
