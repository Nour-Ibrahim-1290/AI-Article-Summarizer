/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Saroshi", "Sans-Serif"],
        inter: ["Sans-Serif", "inter"],
      }
    },
  },
  plugins: [],
}