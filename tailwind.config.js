/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'dmserif': ['DM Serif', 'serif'],
        'com': ['Comfortaa', 'cursive'],
      }
    },
  },
  plugins: [],
}