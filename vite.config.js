import { defineConfig } from 'vite'
import topLevelAwait from 'vite-plugin-top-level-await'

export default defineConfig({
  plugins: [topLevelAwait()],
  // Relative base works for GitHub Pages “deploy from branch” (gh-pages) project sites.
  base: './',
  server: { port: 5174 },
})