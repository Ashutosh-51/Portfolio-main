import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-main-gh-pages/', // Base path for GitHub Pages deployment
  build: {
    outDir: 'build', // Make sure the build folder is generated correctly
  },
})