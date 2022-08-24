/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    maxWidth: {
      main: "1296px",
      md: "856px",
      sm: "416px",
    },
    extend: {
      fontFamily: {
        heading: ["'EB Garamond'", "serif"],
        p: ["'Cormorant Garamond'", "serif"],
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      backgroundImage: {
        "bg-img": "url('/src/assets/bg-img.png')",
      },
      colors: {
        "transparent-white": "rgba(255, 255, 255, 0.5)",
        "transparent-brown": "rgba(205, 170, 125, 0.5)",
      },
    },
  },
  plugins: [],
};
