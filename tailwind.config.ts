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
        gold: {
          DEFAULT: "#d4af37",
          dark: "#c9a227",
          light: "#e5c76b",
        },
        electric: {
          blue: "#3b82f6",
          "blue-light": "#60a5fa",
        },
        charcoal: {
          DEFAULT: "#141414",
          dark: "#0a0a0a",
          card: "#1a1a1a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(212, 175, 55, 0.4)",
        "glow-blue": "0 0 40px -10px rgba(59, 130, 246, 0.4)",
        "glow-lg": "0 0 60px -15px rgba(212, 175, 55, 0.5)",
      },
      backgroundImage: {
        "gradient-luxury":
          "linear-gradient(135deg, #0a0a0a 0%, #141414 50%, #0f172a 100%)",
        "gradient-cta":
          "linear-gradient(135deg, #d4af37 0%, #3b82f6 50%, #d4af37 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
