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
        manualChunks: (id) => {
          if (!id.includes("node_modules")) {
            return undefined;
          }

          if (id.includes("antd") || id.includes("@ant-design") || id.includes("rc-")) {
            return "antd-vendor";
          }

          if (id.includes("@tanstack/react-query")) {
            return "query-vendor";
          }

          if (id.includes("react-intl") || id.includes("@formatjs")) {
            return "intl-vendor";
          }

          if (
            id.includes("/node_modules/react/") ||
            id.includes("/node_modules/react-dom/") ||
            id.includes("/node_modules/scheduler/")
          ) {
            return "react-vendor";
          }

          if (id.includes("jspdf") || id.includes("html2canvas") || id.includes("dompurify")) {
            return "pdf-vendor";
          }

          if (id.includes("highlight.js")) {
            return "highlight-vendor";
          }

          return "vendor";
        },
      },
    },
  },
})
