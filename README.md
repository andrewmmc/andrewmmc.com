# andrewmmc.com

Personal website of Andrew Mok, built with [Astro](https://astro.build).

## Stack

- Astro 5
- Plain CSS with CSS custom properties
- Markdown content collections for blog posts
- MDX support

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Blog posts

Add new posts in `src/content/blog/` as folders with `index.md`:

```
src/content/blog/
  my-new-post/
    index.md
    image.jpg
```

Frontmatter schema:

```yaml
---
title: 'Post Title'
description: 'Optional description for SEO'
pubDate: '2026-02-16'
updatedDate: '2026-03-01' # optional
---
```
