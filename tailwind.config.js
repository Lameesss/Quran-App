/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        lama:"#F35C7A",
        dgreen:"#023020",
        dgreen2:"#1b663e",
        green: "#0B6623",
      }
    },
    
  },
  plugins: [],
}