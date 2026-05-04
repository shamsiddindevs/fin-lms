/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Bu qator juda muhim!
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: '#0077C5', // Intuit uslubidagi ko'k rang
        sidebarBg: '#F8F9FA',
      }
    },
  },
  plugins: [],
}