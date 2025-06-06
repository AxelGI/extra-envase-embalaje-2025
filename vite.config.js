import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/extra-envase-embalaje-2025/', // muy importante
  plugins: [react()],
})
