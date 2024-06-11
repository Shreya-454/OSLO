/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        avenir : ["Avenir", "sans-serif"],
        avenirstd: ["Avenir LT Std","sans-serif"],
      },
      fontSize:{
       "4xxl" : "40px"
      },
      lineHeight:{
        md:"120%",
        md1: "137%",
        lg:"150%",
      },
      colors:{
        lightBlack : "#333333",
        skyBlue : "#39B0B5",
        grey:"#606060",
        blue:"#C3EDED",
        pink :"#EDC2D1",
        lightBlue : "#E7F8F8"
      }
    },
  },
  plugins: [],
}