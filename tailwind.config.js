/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'boogaloo': ['Boogaloo', 'cursive'] ,
        'mont': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
    colors: {

      // colors from the icecream theme
      transparent: "transparent",
      lightblue: '#4DFFFF',
      pink: '#FF1D8F',
      purple: '#B277FF',
      darkpurple: '#7645D9',
      darkestpurple: '#280D5F',
      darkblue: '#778DFF',
      middleblue: '#00C8FF',
      black: '#000000',
      white: '#FFFFFF',
      backgroundDark: '#0C0912',
      backgroundDark2: '#1C152D',
      titlePink: '#ED4CEF',
      buttonBlue: '#34BBF5',
      buttonOffBLue: '#17465A',
      grey: '#A7A7A7',
      yellow: '#FAFF00',
      orange: '#F5B200',
      footerGrey: '#384041',
      footerblac: '#232323',
      red: '#FF0000',
      green: '#31D0AA',
      lightGreen: '#00FF00',
    },
  },
  plugins: [],
}
