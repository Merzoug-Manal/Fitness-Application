/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
         "biege":'#FFEAE3',
         "blue":'#121481',
         "pink":"#ff7e7e",
         "pink1":"#ff9898",
         "pink2":"#FFCBCB",
         "pink3":"#FFB1B1",
      },
    backgroundImage:()=>({
      "mobile-home": "url('./assets/')"
    }),
    fontFamily:{
      dmsans: ["DM Sans","sans-serif"],
      montserrat: ["montserrat","sans-serif"],
    },
    screens:{
      xs: "480px",
      sm:"768px",
      md:"1060px",
    
    }
    },
  },
  plugins: [],
} 