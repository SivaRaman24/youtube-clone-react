/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      content: {
        'search': 'url("/public/svgs_collection/search-thin.svg")'
      }
    },
  },
  plugins: [],
}
