module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./subcomponents/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#26abff",
        "blue-tight": "#4267b2"
      },
      boxShadow: {
        "1": "inset 15px 0px 15px -10px rgb(0 0 0 / 10%)",
        "2": "0px 4px 13px 3px rgb(76 76 76 / 11%)",
        "3": "0px 5px 5px -4px rgb(0 0 0 / 11%)"
      }
    },
  },
  plugins: [],
}
