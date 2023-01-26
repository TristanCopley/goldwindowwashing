/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{js,jsx}', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
      },
      spacing: {
        '104': '26rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '256': '64rem',
      }
    }
  },
  plugins: [],
}
