import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette — warm earth
        parchment:  "#F5EFE0",
        linen:      "#EDE5D0",
        sand:       "#D9C9A8",
        taupe:      "#B5A48A",
        umber:      "#7A6248",
        espresso:   "#3D2B1F",
        mahogany:   "#2A1B12",
        ember:      "#C4622D",
        amber:      "#D4933A",
        gold:       "#C8A84B",
        "gold-light": "#E8CA72",
        smoke:      "#F9F5EE",
        ash:        "#6B5D50",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        serif:   ["var(--font-serif)", "Georgia", "serif"],
        sans:    ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "0.9" }],
        "9xl":  ["8rem",  { lineHeight: "0.9" }],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-up":   "fadeUp 0.7s ease forwards",
        "fade-in":   "fadeIn 0.6s ease forwards",
        "line-grow": "lineGrow 1s ease forwards",
        "marquee":   "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp:   { from: { opacity: "0", transform: "translateY(32px)" }, to: { opacity: "1", transform: "translateY(0)" } },
        fadeIn:   { from: { opacity: "0" }, to: { opacity: "1" } },
        lineGrow: { from: { scaleX: "0" }, to: { scaleX: "1" } },
        marquee:  { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
