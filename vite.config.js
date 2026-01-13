import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// O base deve ser exatamente o nome do repositório
export default defineConfig({
  plugins: [react()],
  base: '/FinApp/',
})
