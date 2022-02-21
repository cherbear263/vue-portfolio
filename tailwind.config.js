const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'fira': ['Fira Sans Condensed', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
};
