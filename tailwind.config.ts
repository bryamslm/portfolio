/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Expediente técnico oscuro: carbón, grises fríos, azul eléctrico.
        // Modo oscuro predeterminado; claro secundario. Tokens verificados AA.
        light: {
          background: "#F7F8FA",
          section: "#FFFFFF",
          elevated: "#E6E8EC",
          text: "#0D0F14",
          soft: "#434955",
          muted: "#6F7683",
          secondary: "#3F62E8",
          accent: "#5A7BFF",
          border: "#DDE1E8",
        },
        dark: {
          background: "#0D0F14",
          section: "#151922",
          elevated: "#2B2F3A",
          text: "#F3F5F8",
          soft: "#C7CBD3",
          muted: "#8F96A3",
          secondary: "#5A7BFF",
          accent: "#8EA3FF",
          border: "#2B2F3A",
        },
      },
      borderColor: {
        "light-border": "#DDE1E8",
        "dark-border": "#2B2F3A",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: ["clamp(3rem,7vw,6.5rem)", { lineHeight: "0.98", letterSpacing: "-0.03em" }],
        "display-tight": ["clamp(2.5rem,5.5vw,4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.025em" }],
        // Primera línea del titular del hero: serif itálica, ~1.8x más chica
        // que la línea sans que le sigue.
        "hero-lead": ["clamp(1.5rem,3.2vw,2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        editorial: "760px",
        layout: "1200px",
      },
      boxShadow: {
        // Sombras muy sutiles, solo en oscuro.
        card: "0 1px 2px rgba(0,0,0,0.18)",
        "card-hover": "0 2px 4px rgba(0,0,0,0.28)",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};