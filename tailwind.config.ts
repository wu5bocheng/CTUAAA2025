import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "fade-in": "fade-in 1.5s ease-out",
        "fade-in-slow": "fade-in 2s ease-out 0.5s forwards",
        "fade-in-slower": "fade-in 2s ease-out 1s forwards",
        "blur-in": "blur-in 2s ease-out forwards",
        "slide-up": "slide-up 1s ease-out",
        "fade-slide-up": "fade-slide-up 1.2s ease-out",
        "scale-fade-in": "scale-fade-in 1s ease-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "blur-in": {
          "0%": { backdropFilter: "blur(0px)", backgroundColor: "rgba(0, 0, 0, 0)" },
          "100%": { backdropFilter: "blur(2px)", backgroundColor: "rgba(0, 0, 0, 0.3)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100px)" },
          "100%": { transform: "translateY(0)" },
        },
        "fade-slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-fade-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
