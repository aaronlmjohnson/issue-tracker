/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#27005d',
        'secondary': '#ffed4a',
      }
    },
    fontFamily: {
      primary:['Plus Jakarta Sans', 'sans-serif'],
      secondary:['DM Sans', 'sans-serif']
    },
  },
  plugins: [],
}

