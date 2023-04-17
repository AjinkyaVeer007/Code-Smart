/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/Components/navbar.jsx",
    "./src/Components/sidebarComponents.jsx",
    "./src/hero.js",
    "./src/codeData.js",
    "./src/test.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
