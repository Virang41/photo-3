import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// basic vite config for react app
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
    open: true
  }
})
