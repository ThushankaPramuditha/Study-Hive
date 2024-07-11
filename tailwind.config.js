/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  colors: {
    customGray: '#464646',
    customYellow: '#F6CA30',
    customBlue:'#2F327D',
  },
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Ensure Inter font is included
      },
    },
  },
  
  plugins: [],
  variants: {
    extend: {
      display: ["focus-group"]
    },
  },
}

