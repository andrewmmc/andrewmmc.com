// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://andrewmmc.com',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwind()],
  },
});
