/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './index.html',
    './src/**/*.{html,js,vue,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
