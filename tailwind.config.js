/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['Montserrat', 'serif'],
    },
    extend: {
      colors: {
        primary: '#0A2D82',
        secondary: '#D3D62E'
      }
    },
  },
  plugins: [],
}

