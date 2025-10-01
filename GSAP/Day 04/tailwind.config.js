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
      },
      colors: {
        primary: "#121212",   // custom blue
        accent: "#F97316",  // custom orange
      },
    },
  },
  plugins: [],
}