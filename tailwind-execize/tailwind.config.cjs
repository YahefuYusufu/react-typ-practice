/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        1: "18px",
        2: "36px",
        3: "54px",
        4: "72px",
      },
    },
  },
  plugins: [],
}
