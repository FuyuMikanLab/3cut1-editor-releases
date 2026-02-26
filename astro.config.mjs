// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages 项目页需要 base（如 /3cut1-editor-releases/），本地开发默认为 /
  base: process.env.BASE_PATH || '/',
});
