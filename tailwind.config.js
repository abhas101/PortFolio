/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:['Inter','sans-serif'],
        moserat:["Montserrat", 'sans-serif'],
      }
    },
    animation:{
      'move-left':'move-left 1s linear infinite'

    },
    keyframes:{
      "move-left":{
        "0%":{
          transform:'translateX(0%)'
        },
        "100%":{
          transform:'translateX(-50%)'
        }
      }
    },
  },
  plugins: [],
}