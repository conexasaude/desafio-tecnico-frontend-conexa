/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#2E50D4",
        primaryDark: "##1C307F",
        secondary: "##FFFFFB",
        quaternary: "#DAD2D0",
      },
    }
  },
  plugins: [],
};
