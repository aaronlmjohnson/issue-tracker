/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#27005d',
        'primary-selected': "#4a03ab",
        'secondary': '#ffed4a',
        'delete': '#FF0000',
        'non-focus': '#a7a7a7',
        'high-priority':'#ff6961',
        'med-priority':'#fdfd96',
        'low-priority':'#77dd77',
        'shade-0': '#26005C',
        'shade-1': '#170038',
        'shade-2': '#5B00DB',
        'shade-3': '#4A00B3',
        'shade-4': '#39008A',
      },
      gridTemplateColumns:{
        'two': 'repeat(2, 40%)',
        'five': 'repeat(5, max-content)',
        'sidebarlinks': '4rem 1fr 1rem'
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

