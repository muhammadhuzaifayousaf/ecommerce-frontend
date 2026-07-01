import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ Change 'ecommerce-frontend' to your actual GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: '/ecommerce-frontend/',
})
