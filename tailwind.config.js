/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'background-dark': '#1E1D1D'
      },
      colors: {
        'color-dark': '#1E1D1D',
        'color-sky': '#87CEEB',
        'color-magenta': '#f075f0',
        'color-yellow': '#f2f28f'
      }
    },
  },
  plugins: [],
}

