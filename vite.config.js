import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: false,
    sourcemap: false,
    lib: {
      entry: 'lib/index.js',
      name: '@abw/react-formula',
      fileName: 'react-formula',
    },
    rollupOptions: {
      external: ['react', 'reactDOM'],
      output: {
        globals: {
          react: 'React',
          'react-dom/client': 'ReactDOM',
        },
      },
    },
  },
})
