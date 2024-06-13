/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor:"#8873ef",
        headingColor:"081e21",
        smallTextColor:"#193256",
      }
    },
  },
  plugins: [],
}