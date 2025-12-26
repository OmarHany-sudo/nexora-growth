import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",   // Navy (Professional)
        accent: "#06b6d4",    // Cyan / Teal (CTAs)
        muted: "#64748b",     // Text secondary
        surface: "#f8fafc",   // Light background sections
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(15, 23, 42, 0.15)",
        card: "0 8px 24px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl: "1rem",
      },
      spacing: {
        section: "6rem",
      },
    },
  },
  plugins: [],
};

export default config;
