import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // Настройка: @ -> /src
      '@': path.resolve(__dirname, './src'),
    },
  },
})