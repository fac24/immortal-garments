/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      coral: "#F27289",
      piggyBankPink: "#F2949C",
      pistachioGreen: "#C9F2E3",
      lightGreen: "#A3D9B0",
      darkGreen: "#75BF87",
    },
    extend: {},
  },
  plugins: [],
};
