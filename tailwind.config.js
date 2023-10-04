/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/Components/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'utc-logo': "url('Components/img/UTC-logo.png')",
        'pmm-logo': "url(Components/img/PivotalMomentsMedia_LOGO_Dark.png)"
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        'logo': '100%',
        
      }
    },
  },
  plugins: [],
}
