/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        titlefont: ['EnergySpike-d9Bx6', 'sans-serif'],
      },
      backgroundImage: {
        'backgroundImage': "url('/assets/619306-bg-full-netflix-grid-v2.desktop.jpg')",
      },
    },
  },
  plugins: [],
}
