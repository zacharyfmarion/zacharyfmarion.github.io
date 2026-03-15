import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://zac.is-a.dev',
  integrations: [mdx(), react()],
  output: 'static',
});
