/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Habilita el modo oscuro con una clase
  theme: {
    extend: {
      colors: {
        light: {
          background: "#f0f9ff",
          text: "#1F2937",
          secondary: "#FACC15",
          section: "#ffffff",
          border: "#E5E7EB",
        },
        dark: {
          background: "#1F2937",
          text: "#F9FAFB",
          secondary: "#FACC15",
          section: "#111827",
          border: "#374151",
        },
      },
      borderColor: {
        "light-border": "#E5E7EB", // Modo claro
        "dark-border": "#374151",  // Modo oscuro
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

