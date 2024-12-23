import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vite.dev/config/
export default defineConfig({
  base: '/reactor/',
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'HR app',
        },
      },
    }),
  ],
})
