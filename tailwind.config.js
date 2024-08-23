/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-yellow': 'rgb(255, 255, 51)',
      },
      animation: {
        "cosmic-wave":"cosmic-wave 5s ease infinite"
    },
    keyframes: {
      "cosmic-wave":{"0%":{"background":"radial-gradient(100% 225% at 0 100%, #0039A6 0, #005EB8 100%), linear-gradient(-45deg, #007BFF 70%, #005EB8 100%), linear-gradient(135deg, #004785 0, #0039A6 100%), linear-gradient(60deg, #005EB8 0, #0039A6 50%)","backgroundSize":"100% 100%","backgroundPosition":"0% 60%","backgroundBlendMode":"color-dodge, color-burn, color-burn, normal"},"20%":{"background":"radial-gradient(100% 225% at 0 100%, #0039A6 0, #005EB8 100%), linear-gradient(-45deg, #007BFF 70%, #005EB8 100%), linear-gradient(135deg, #004785 0, #0039A6 100%), linear-gradient(60deg, #005EB8 0, #0039A6 50%)","backgroundSize":"105% 105%","backgroundPosition":"10% 50%","backgroundBlendMode":"color-dodge, color-burn, color-burn, normal"},"40%":{"background":"radial-gradient(100% 225% at 0 100%, #0039A6 0, #005EB8 100%), linear-gradient(-45deg, #007BFF 70%, #005EB8 100%), linear-gradient(135deg, #004785 0, #0039A6 100%), linear-gradient(60deg, #005EB8 0, #0039A6 50%)","backgroundSize":"110% 300%","backgroundPosition":"20% 40%","backgroundBlendMode":"color-dodge, color-burn, color-burn, normal"},"60%":{"background":"radial-gradient(100% 225% at 0 100%, #0039A6 0, #005EB8 100%), linear-gradient(-45deg, #007BFF 70%, #005EB8 100%), linear-gradient(135deg, #004785 0, #0039A6 100%), linear-gradient(60deg, #005EB8 0, #0039A6 50%)","backgroundSize":"115% 115%","backgroundPosition":"30% 30%","backgroundBlendMode":"color-dodge, color-burn, color-burn, normal"},"80%":{"background":"radial-gradient(100% 225% at 0 100%, #0039A6 0, #005EB8 100%), linear-gradient(-45deg, #007BFF 70%, #005EB8 100%), linear-gradient(135deg, #004785 0, #0039A6 100%), linear-gradient(60deg, #005EB8 0, #0039A6 50%)","backgroundSize":"250% 120%","backgroundPosition":"40% 20%","backgroundBlendMode":"color-dodge, color-burn, color-burn, normal"},"100%":{"background":"radial-gradient(100% 225% at 0 100%, #0039A6 0, #005EB8 100%), linear-gradient(-45deg, #007BFF 70%, #005EB8 100%), linear-gradient(135deg, #004785 0, #0039A6 100%), linear-gradient(60deg, #005EB8 0, #0039A6 50%)","backgroundSize":"100% 100%","backgroundPosition":"0% 60%","backgroundBlendMode":"color-dodge, color-burn, color-burn, normal"}},
    },
  },
  plugins: [],
  
}}
