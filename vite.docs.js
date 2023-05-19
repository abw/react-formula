import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import define from  './vite.defs.js'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  root: 'website',
  base: '/react-formula/',
  define,
  build: {
    emptyOutDir: true,
    outDir: '../docs'
  }
})

