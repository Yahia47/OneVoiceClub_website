/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  extend: {
  colors: {
    "primary": "#C9A24D",
    "gold-light": "#E6C97A",
    "gold-dark": "#9E7C19",
    "dark-bg": "#0B0A08",
    "dark-card": "#1A1408",
    "dark-border": "#3A2E12",
    "text-gold": "#E3C76A",
    "text-muted": "#C0B07A",
  },

    fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
