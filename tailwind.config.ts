import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0d",
        panel: "#16161a",
        line: "#28282e",
        orange: "#ff6a1f",
        gold: "#f2b542",
        foreground: "#f4f3ef",
        muted: "#9a9aa4",
      },
    },
  },
  plugins: [],
};
export default config;
