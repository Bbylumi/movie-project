/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backgroundImage': "url('/assets/moviebg.jpg')",
      },
    },
  },
  plugins: [],
}
