import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import define from  './vite.defs.js'
import svgr from 'vite-plugin-svgr'
import jsconfigPaths from 'vite-jsconfig-paths'

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    jsconfigPaths({ root: '../' })
  ],
  root: 'website',
  base: '/react-formula/',
  define,
  build: {
    emptyOutDir: true,
    outDir: '../docs'
  }
})

