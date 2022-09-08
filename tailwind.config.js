/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./src/pages/*.js",
    "./src/components/*.js",
    "./src/pages/projects/*.js",
    "./src/templates/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Lora"],
      },
      colors: {
        primary: colors.blue,
        secondary: colors.yellow,
        neutral: colors.slate,
      },
    },
  },
  plugins: [],
}
