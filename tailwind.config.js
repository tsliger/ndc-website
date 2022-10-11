/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ndcDark: '#0B0A0A',
        ndcBlue: '#0649CD',
        ndcWhite: '#DBDBDB'
      },
    },
  },
  plugins: [],
}
