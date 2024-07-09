/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./src/Components/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pmmGrit: "#DFB13F",
        pmmEvry1: "#3D8C9B",
        pmmResilience: "#510221",
        pmmSilver: "#929191",
        pmmGreen: "#494B31",
        pmmTan: "#C4BAAF",
        pmmGold: "#BDA259",
        pmmBlue: "#9EC6CD",
        pmmRed: "#DE5950"

      },
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
