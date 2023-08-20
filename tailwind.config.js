/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "Poppins",
      },
      colors: {
        lightPurple: "#473A6C",
        darkPurple: "#263238",
      }
    },
  },
  plugins: [],
}

