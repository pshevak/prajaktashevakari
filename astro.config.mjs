import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pshevak.github.io/prajaktashevakari',
  integrations: [tailwind(), mdx(), sitemap()],
  output: 'static',
  build: { format: 'directory' },
  vite: {
    build: {
      target: 'es2020'
    }
  }
});
