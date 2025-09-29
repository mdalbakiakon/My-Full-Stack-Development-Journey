/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], //custom font [add in html from google as well]
        antonio: ["Antonio", "sans-serif"],
        satisfy: ["Satisfy", "cursive"],
      },

      colors:{
        primary: "#111111",
        accent: "#A7CF4A",
      },
    },
  },
  plugins: [],
}