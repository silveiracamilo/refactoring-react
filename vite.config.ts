import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths';
import viteCompression from 'vite-plugin-compression';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    viteCompression(),
    tailwindcss(),
  ],
  build: {
    target: "es2020",
    sourcemap: false,
    outDir: path.join(__dirname, "build"),
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        entryFileNames: "[name].[hash].js",
        chunkFileNames: "[name].[hash].js",
        manualChunks: {
          "react-vendor": ["react", "react-dom", "scheduler"],
          "antd-vendor": ["antd", "@ant-design/icons"],
          "query-vendor": ["@tanstack/react-query"],
          "pdf-vendor": ["jspdf", "html2canvas", "dompurify"],
          "highlight-vendor": ["highlight.js"],
        },
      },
    },
  },
})
