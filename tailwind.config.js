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
      animation: {
        blob: "blob 3s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(0.8)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
