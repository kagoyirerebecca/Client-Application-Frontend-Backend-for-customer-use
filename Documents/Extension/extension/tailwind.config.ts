// tailwind.config.js
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Make sure this matches the actual path in your project
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Adjust this path if your pages are elsewhere
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
       
      },
    },
  },
  plugins: [],
} as Config;
