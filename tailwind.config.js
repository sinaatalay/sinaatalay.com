/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/pages/*.js", "./src/components/*.js"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Lora"],
        primary: ["Signika Negative"],
      },
      colors: {
        primary: colors.indigo,
        secondary: colors.yellow,
        neutral: colors.slate,
      }
    },
  },
  plugins: [],
}
