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
        // Paleta "Claude" — coral cálido sobre papel/negro cálido.
        // Acentos verificados AA: coral oscuro sobre papel claro, coral brillante sobre negro cálido.
        light: {
          background: "#F4EFE5", // papel cálido
          section: "#FBF8F1", // tarjeta (más clara que el fondo para elevar)
          elevated: "#FFFFFF",
          text: "#2A2620", // casi-negro cálido
          soft: "#5B544A", // texto secundario
          muted: "#8A8276", // texto tenue
          secondary: "#A85432", // coral profundo (AA como texto/enlace sobre papel)
          accent: "#C97B52", // coral marca (rellenos suaves)
          border: "#E4DBCB",
        },
        dark: {
          background: "#100F0D", // negro cálido
          section: "#1A1815", // tarjeta
          elevated: "#211E1A",
          text: "#ECE7DC", // crema
          soft: "#C9C3B6", // texto secundario
          muted: "#857F75", // texto tenue
          secondary: "#D9925E", // coral brillante (AA como texto/enlace sobre negro)
          accent: "#C97B52", // coral marca
          border: "#2C2823",
        },
      },
      borderColor: {
        "light-border": "#E4DBCB",
        "dark-border": "#2C2823",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-display)", "Georgia", "Times New Roman", "serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,15,13,0.04), 0 8px 24px -12px rgba(16,15,13,0.12)",
        "card-hover": "0 2px 4px rgba(16,15,13,0.06), 0 16px 40px -16px rgba(16,15,13,0.22)",
      },
    },
  },
  plugins: [],
};
