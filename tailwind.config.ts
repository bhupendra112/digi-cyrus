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
          DEFAULT: "#0a0a0a",
          dark: "#000000",
          card: "#111111",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        poppins: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2rem",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(255, 255, 255, 0.25)",
        "glow-blue": "0 0 40px -10px rgba(59, 130, 246, 0.4)",
        "glow-lg": "0 20px 50px -20px rgba(0, 0, 0, 0.45)",
        pill: "0 10px 40px -12px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        "gradient-luxury": "linear-gradient(180deg, #000000 0%, #0a0a0a 100%)",
        "gradient-cta": "linear-gradient(135deg, #ffffff 0%, #e5e5e5 100%)",
        grain:
          "radial-gradient(ellipse at center, rgba(180,120,40,0.35) 0%, rgba(0,0,0,0.85) 70%)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-slow": "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
