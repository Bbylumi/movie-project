/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        titlefont: ['Rubik Vinyl', 'sans-serif'],
        textfont: ['Teko', 'sans-serif'],
        textfont2: ['Noto Sans', 'sans-serif'],
    
      },
      colors: {
        textcolor: ['#e50914'],
        textcolorhover: ['#ea7e7e'],
        signup: ['#8e44ad'],
        signuphover: ['#f72a35'],

      },
      backgroundImage: {
        'backgroundImage': "url('/assets/619306-bg-full-netflix-grid-v2.desktop.jpg')",
      },
    },
  },
  plugins: [],
}
