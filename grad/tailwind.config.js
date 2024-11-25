/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'background: rgba(0, 96, 228, 1);',
      },
      fontFamily:
      {
        'moichiy': ["Mochiy Pop One"]
      }
    },
  },
  plugins: [],
}