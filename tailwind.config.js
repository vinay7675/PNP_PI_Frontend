/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: '#FFBF00',
        cream: '#F7F5EF',
        navy: '#1F2A44',
        turquoise: '#20B2AA',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
