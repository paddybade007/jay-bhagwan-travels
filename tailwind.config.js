/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Check karo ki ye line sahi hai
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003580',
        secondary: '#febb02'
      }
    },
  },
  plugins: [],
}