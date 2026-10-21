/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#064e3b',
        deep: '#043b2e',
        gold: '#bd8b3b',
        cream: '#fbf8ef',
        ink: '#173b33',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        arabic: ['Amiri', 'serif'],
      },
    },
  },
  plugins: [],
}
