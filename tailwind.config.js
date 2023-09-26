/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/Components/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'utc-logo': "url('Components/img/UTC-logo.png')",
      }
    },
  },
  plugins: [],
}
