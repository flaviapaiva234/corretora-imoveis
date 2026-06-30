import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const base = mode === 'vercel' ? '/' : '/corretora-imoveis/'

  return {
    base,
    plugins: [react()],
  }
})
