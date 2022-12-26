/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xsm: { max: "375px" },
      sm: { max: "550px" },
      md: { max: "767px" },
      lg: { max: "991px" },
      xl: { max: "1200px" },
    },
  },
  plugins: [],
}
