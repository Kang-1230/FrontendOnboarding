import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Vite 설정 정의
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
