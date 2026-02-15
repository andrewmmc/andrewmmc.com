# AGENTS.md - Coding Agent Instructions

## Project Overview

Personal blog/portfolio site built with **Astro 5** (static site generation).
No client-side JS frameworks — pure Astro components with Markdown/MDX content.
TypeScript strict mode. Plain CSS with custom properties (no Tailwind).

- **Site URL:** https://andrewmmc.com
- **Node.js:** v24+ with npm
- **Module system:** ES modules (`"type": "module"` in package.json)

## Build / Dev / Lint Commands

```bash
# Development server
npm run dev

# Production build (outputs to dist/)
npm run build

# Preview production build locally
npm run preview

# Lint (ESLint v9 flat config)
npm run lint
npm run lint:fix

# Format (Prettier)
npm run format          # write changes
npm run format:check    # check only

# Type check
npx tsc --noEmit
```

### Testing

There are **no tests** in this project — no test runner, no test files, no testing
dependencies. If you add tests, consider Vitest (compatible with the Astro/Vite
toolchain).

## Project Structure

```
src/
├── assets/            # Static images processed by Astro (use import)
├── components/        # Reusable .astro components
├── content/
│   ├── blog/          # Blog posts: <slug>/index.md (with co-located images)
│   └── pages/         # Standalone pages as Markdown
├── content.config.ts  # Content collection schemas (Zod)
├── consts.ts          # Site-wide constants (SITE_TITLE, etc.)
├── layouts/           # Page layout components
├── pages/             # File-based routing
│   ├── blog/
│   │   ├── index.astro
│   │   └── [...slug].astro
│   ├── index.astro
│   ├── about.astro
│   ├── 404.astro
│   └── rss.xml.js
└── styles/
    └── global.css     # Design tokens + global styles
public/                # Static assets served as-is (favicon, avatar)
astro.config.mjs       # Astro config (MDX + Sitemap integrations)
```

## Code Style Guidelines

### TypeScript

- Strict mode enabled (extends `astro/tsconfigs/strict`, `strictNullChecks: true`).
- Use TypeScript in all `.ts` files and Astro component frontmatter.
- Exception: `rss.xml.js` uses plain JS (acceptable for simple data endpoints).

### Imports

Order imports as follows (separated by blank lines if needed):
1. Astro/framework imports (`astro:content`, `astro/config`)
2. Third-party packages (`@astrojs/mdx`, etc.)
3. Local layouts and components (`../layouts/...`, `../components/...`)
4. Local constants and utilities (`../consts`)

Use relative paths with `../` — no path aliases are configured.

### Formatting (Prettier)

- **Semicolons:** yes
- **Quotes:** single quotes
- **Tab width:** 2 spaces
- **Trailing commas:** ES5 style
- **Print width:** 100 characters
- **Astro files:** use `prettier-plugin-astro` parser

### ESLint Rules

- ESLint v9 flat config (`eslint.config.mjs`)
- Extends: `@eslint/js` recommended, `typescript-eslint` recommended, `eslint-plugin-astro` recommended
- `@typescript-eslint/no-unused-vars`: error (prefix unused args with `_`)
- Ignored dirs: `dist/`, `.astro/`, `node_modules/`

### Naming Conventions

| Item                  | Convention       | Example                          |
|-----------------------|------------------|----------------------------------|
| Components/Layouts    | PascalCase       | `BaseHead.astro`, `BlogPost.astro` |
| Pages                 | lowercase/kebab  | `about.astro`, `rss.xml.js`     |
| Dynamic routes        | brackets         | `[...slug].astro`                |
| Exported constants    | UPPER_SNAKE_CASE | `SITE_TITLE`, `SOCIAL_LINKS`    |
| CSS custom properties | --kebab-case     | `--primary-500`, `--color-text`  |
| CSS class names       | kebab-case       | `.section-heading`, `.post-item` |
| Variables/functions   | camelCase        | `formattedDate`, `getAllPosts`   |

### Astro Component Patterns

- Use `interface Props` (or `type Props`) in the frontmatter for typed props.
- Destructure from `Astro.props` with inline defaults:
  ```astro
  const { title, description = SITE_DESCRIPTION } = Astro.props;
  ```
- Place `<style>` blocks at the bottom of `.astro` files (component-scoped CSS).
- Use `:global()` modifier sparingly, only for styling rendered Markdown content.

### Content Collections

- Defined in `src/content.config.ts` using `defineCollection` + `glob` loader + Zod schemas.
- **Blog posts:** `src/content/blog/<slug>/index.md` — frontmatter requires `title` and `pubDate`.
- **Pages:** `src/content/pages/<name>.md` — frontmatter requires `title`.
- Images can be co-located with blog posts in their directory.

### CSS Architecture

- Design tokens as CSS custom properties in `:root` (defined in `global.css`).
- Color palettes: `--primary-50` through `--primary-900`, `--gray-50` through `--gray-900`.
- Semantic tokens: `--color-text`, `--color-link`, `--color-bg`, etc.
- Font: Inter (Google Fonts) with system font fallbacks.
- Max width: `48rem` (`--max-width`).
- Responsive breakpoints use `em` units: `30em` (mobile), `48em` (tablet).

### Error Handling

- This is a static site — minimal runtime error handling needed.
- A custom 404 page exists at `src/pages/404.astro`.

## Git Conventions

- **Commit messages:** Conventional Commits style, lowercase description, no trailing period.
  - `feat: add new blog post about topic`
  - `fix: correct date formatting on blog index`
  - `refactor: simplify header component`
- **Current branch:** `refactor/astro` (Astro rewrite branch)
- **Default branch:** `master`

## Environment

- `.env` and `.env.production` are gitignored.
- No environment variables are currently referenced in source code.
- Site URL is hardcoded in `astro.config.mjs` and `src/consts.ts`.

## Key Files to Know

| File                    | Purpose                                    |
|-------------------------|--------------------------------------------|
| `astro.config.mjs`     | Astro config (site URL, integrations)      |
| `src/consts.ts`        | Site title, description, social links      |
| `src/content.config.ts`| Content collection schemas                 |
| `src/styles/global.css` | Design tokens and global styles           |
| `src/layouts/BaseLayout.astro` | Main page layout wrapper            |
| `src/components/BaseHead.astro` | HTML `<head>` with meta tags       |
