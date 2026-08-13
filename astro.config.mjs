// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // v1 is a fully static site — default `output: 'static'`, no adapter needed.
  // GitHub Pages project site: https://h3xorush.github.io/gabs-workshop/
  // (If you add a custom domain later, update `site`; `base` can then be removed.)
  site: 'https://h3xorush.github.io',
  base: '/gabs-workshop',
});
