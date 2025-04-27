import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', // Для тестов React компонентов
    setupFiles: './setupTests.js', // Настройка тестов
  },
});

