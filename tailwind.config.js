/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      screens: {
        notebook: "1366px", // breakpoint para telas de 1366px
      },
    },
  },
  plugins: [],
};
