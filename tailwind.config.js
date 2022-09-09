const defaultTheme = require("tailwindcss/defaultTheme")
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
        sans: ["Ubuntu", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
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
