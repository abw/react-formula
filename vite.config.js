import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import define from  './vite.defs.js'

export default defineConfig({
  plugins: [react(), svgr()],
  define,
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.js',
    include: ['test/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['test/setup.js', 'test/lib']
  },
  build: {
    minify: true,
    sourcemap: true,
    lib: {
      entry: 'lib/index.js',
      name: '@abw/react-formula',
      fileName: 'react-formula',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime'
      ],
      output: {
        globals: {
          'react': 'react',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
})
