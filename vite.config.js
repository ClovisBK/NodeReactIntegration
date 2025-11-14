// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/V1/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
});
