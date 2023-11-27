/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        ibm: ["IBM Plex Sans", "sans-serif"],
      },
    },
    colors: {
      transparent: "transparent",
      profile: "#383838",
      black: "#000000",
      lightGray: "#585858",
      darkGreen: "#00CA8D",
      sidebarBg: "#02023B",
      navBg: "#222222",
      iconBg: "#FF75C8",
      lightGold: "#fdf1d7",
      grayish: "#a3a3a3",
      grayOne: "#eeeeee",
      lightTeal: "#ccf4e8",
      teal: "#00CA8D",
      grayTeal: "#b8e9da",
      lightWhite: "#f7f7f7",
      ...colors,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
