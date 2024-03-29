/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.ts"
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, ".")
    }
  }
});
