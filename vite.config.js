import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("react-router-dom") ||
              id.includes("react-router-hash-link")
            ) {
              return "router";
            }

            if (id.includes("react")) {
              return "react-vendor";
            }

            return "vendor";
          }
        },
      },
    },

    chunkSizeWarningLimit: 600,
  },
});