/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F4E3A0", // light gold
          500: "#A4771F", // dark gold
        },
        surface: {
          DEFAULT: "#231803", // main background
        },
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(90deg, #F4E3A0 0%, #A4771F 100%)",
        "primary-gradient-reverse":
          "linear-gradient(90deg, #A4771F 0%, #F4E3A0 100%)",
      },
    },
  },
  plugins: [],
}
