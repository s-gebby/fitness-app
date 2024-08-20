/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "gray-fluff":"gray-fluff 5s ease infinite"
    },
    keyframes: {
      "gray-fluff":{"0%":{"background-size":"100% 100%","background-position":"left top","background-image":"linear-gradient(to bottom right, rgba(96, 96, 96, 0.8), rgba(0, 0, 0, 0.8))"},"50%":{"background-size":"200% 200%","background-position":"right bottom","background-image":"linear-gradient(to bottom right, rgba(96, 96, 96, 0.8), rgba(0, 0, 0, 0.8))"},"100%":{"background-size":"100% 100%","background-position":"left top","background-image":"linear-gradient(to bottom right, rgba(96, 96, 96, 0.8), rgba(0, 0, 0, 0.8))"}},
    },
  },
  plugins: [],
  
}}
