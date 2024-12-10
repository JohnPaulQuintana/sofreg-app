/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // Custom labels for devices
        'phone': '480px',          // Small phones
        'tablet': '768px',         // Tablets
        'laptop': '1024px',        // Laptops
        'desktop': '1280px',       // Desktops
        'wide': '1536px',          // Large screens
      },
      backgroundColor: {
        'background-dark': '#1e1b1b'
      },
      colors: {
        'color-gray':'#7A7A7A',
        'color-dark': '#1E1D1D',
        'color-sky': '#87CEEB',
        'color-magenta': '#f075f0',
        'color-yellow': '#f2f28f',
        'color-primary-blue': '#146BCF'
      }
    },
  },
  plugins: [],
}

