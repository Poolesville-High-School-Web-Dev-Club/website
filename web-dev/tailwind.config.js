const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
    ,],
  theme: {
    colors: {
      gray: colors.gray,
      neutral: colors.neutral,
      white: colors.white,
      primary: '#5F5AA2',
      secondary: "#355691",
      blue: {
        700: '#4A4C56',
        800: '#32333A',
        900: '#292A30'
      }
    },

  },
  plugins: [],
}