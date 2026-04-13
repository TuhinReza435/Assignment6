import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  // Remove the complex base path.
  // '/' is the default and works for almost all Vercel deployments.
  base: "/",
});
