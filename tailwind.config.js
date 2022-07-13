/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/pages/*.js", "./src/components/*.js", "./src/pages/projects/*.js"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Lora"],
        primary: ["Signika Negative"],
      },
      colors: {
        primary: colors.blue,
        secondary: colors.yellow,
        neutral: colors.slate,
      }
    },
  },
  plugins: [],
}
