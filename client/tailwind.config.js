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
      },
      height: {
        'navbar': '3rem',
        'sidebar': 'calc(100vh - 3rem)'
      }
    },
    fontFamily: {
      primary:['Plus Jakarta Sans', 'sans-serif'],
      secondary:['DM Sans', 'sans-serif']
    },
  },
  plugins: [],
}

