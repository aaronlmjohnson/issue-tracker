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
        'non-focus': '#a7a7a7',
        'pastel-0': '#fd8a8a',
        'pastel-1': '#f1f7b5',
        'pastel-2': '#ffcbcb',
        'pastel-3': '#c0d8c0',
        'pastel-4': '#9ea1d4',
        'pastel-5': '#a8d1d1',
      },
      height: {
        'navbar': '3rem',
        'sidebar': 'calc(100vh - 3rem)'
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
    fontFamily: {
      primary:['Plus Jakarta Sans', 'sans-serif'],
      secondary:['DM Sans', 'sans-serif']
    },
    variants:{
      animation:['animation-spin']
    }
  },
  plugins: [],
}

