import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/QINDT/',
  optimizeDeps: {
    include: ['@fontsource/segoe-ui']
  }
})