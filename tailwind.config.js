/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0F1A",
          surface: "#121826",
          raised: "#171F30",
          border: "#232C40",
        },
        paper: {
          DEFAULT: "#EDEFF4",
          dim: "#8A93A6",
          faint: "#5A6478",
        },
        signal: {
          DEFAULT: "#5B6CFF",
          soft: "#8B97FF",
          dim: "#2C3470",
        },
        circuit: {
          DEFAULT: "#F2A93B",
          soft: "#F7C572",
        },
        mint: {
          DEFAULT: "#3DD68C",
        },
        danger: {
          DEFAULT: "#F2555A",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        grid: "linear-gradient(#232C40 1px, transparent 1px), linear-gradient(90deg, #232C40 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(91,108,255,0.25), 0 8px 40px -8px rgba(91,108,255,0.35)",
      },
      keyframes: {
        pulseline: {
          "0%, 100%": { opacity: 0.35 },
          "50%": { opacity: 1 },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        dash: {
          to: { strokeDashoffset: 0 },
        },
      },
      animation: {
        pulseline: "pulseline 2.4s ease-in-out infinite",
        floaty: "floaty 5s ease-in-out infinite",
        dash: "dash 1.8s ease-out forwards",
      },
    },
  },
  plugins: [],
}

