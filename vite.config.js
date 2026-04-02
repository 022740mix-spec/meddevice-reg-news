import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    // SVG などを data: URL に埋め込まずファイル出力する（img の data: ブロック環境・キャッシュ調査の回避）
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("/data/profiles/")) {
            return "data-profiles-full";
          }
          if (id.includes("/data/countryProfiles.js")) {
            return "data-profiles-full";
          }
          if (id.includes("/data/articlesData.js")) {
            return "data-articles";
          }
          if (id.includes("/data/regulatoryGuide.js")) {
            return "data-guide";
          }
          if (id.includes("/data/countryProfilesMeta.js")) {
            return "data-profiles-meta";
          }
        },
      },
    },
  },
})
