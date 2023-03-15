/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baseColor: "#5271ff",
        lighter: "#293980",
        darker: "#869cff"
      },
    },
  },
  plugins: [],
};
