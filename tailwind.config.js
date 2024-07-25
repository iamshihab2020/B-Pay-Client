/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#183D3D",
        secondary: "#5C8374",
        success: "#93B1A6",
        info: "#34495e",
        warning: "#EE9322",
        danger: "#C63D2F",
        light: "#F5F7F8",
        dark: "#040D12",
      },
    },
  },
  plugins: [],
});

