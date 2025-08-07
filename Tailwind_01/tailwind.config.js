/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", 
  ],
  theme: {
    extend: {
      backgroundColor:{
        'custom-bg' : 'rgba(30, 28, 33, 1)',
        'custom-grad': 'linear-gradient(to bottom, transparent, rgba(30, 28, 33, 0.5), rgba(30, 28, 33, 1))'
      },
    },
  },
  plugins: [],
};