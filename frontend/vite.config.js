import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
        theme: {
          extend: {
            // colors: {
            //   "trackruit-primary": "#2563eb",
            //   "trackruit-secondary": "#1e40af",
            // },
          },
        },
      },
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
// This configuration sets up Vite with React and Tailwind CSS, and configures a proxy for API requests.