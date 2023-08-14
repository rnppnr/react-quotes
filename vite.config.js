import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://rnppnr.github.io/react-quotes",
  plugins: [react()],
});
