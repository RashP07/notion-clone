import {zinc} from "tailwindcss/colors"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray:zinc
      },
      fontFamily:{
        'sans': ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: [],
}

