/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{js,jsx}', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '192': '48rem',
        '256': '64rem',
      }
    }
  },
  plugins: [],
}
