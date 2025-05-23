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
    outDir: path.join(__dirname, "build"),
    rollupOptions: {
      output: {
        entryFileNames: "[name].[hash].js",
        chunkFileNames: "[name].[hash].js",
        // manualChunks: (id) => {
        //   if (id.includes("node_modules")) {
        //     return "vendor";
        //   }
        // },
      },
    },
  },
})
