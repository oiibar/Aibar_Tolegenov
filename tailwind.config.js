/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      back: "#daad86",
      blue: "#659dbd",
      white: "#fff",
      green: "#8d8741",
      txt: "#fff",
      block: "#fbeec1",
      btn: "#3b82f6",
      btnDark: "#1d4ed8",
      hov: "#6b7280",
      background: "#efefef",
      watermelon: "#ff3b3f",
      carbon: "#a9a9a9",
      sky: "caebfx2",
    },
    fontFamily: {
      sans: ["Montserrat"],
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
  },
  plugins: [],
};
