/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          darkGray: "hsl(0, 0%, 63%)",
          veryDarkGray: "hsl(0, 0%, 27%)",
          black: "hsl(0, 0%, 0%)",
          white: "hsl(0, 0%, 100%)",
        },
        secondary: {
          100: "#EE9972",
          200: "#FBDABB",
          300: "#EDEFEE",
          400: "#333333",
        },
      },
      fontFamily: {
        primary: ["League Spartan, sans-serif"],
        // primary: ["Markazi Text, serif"],
        secondary: ["Markazi Text, serif"],
        // secondary: ["Karla, sans-serif"],
      },
      gridTemplateColumns: {
        categoryCol: "repeat(8,minmax(4.375rem, 1fr))",
        filteredCol: "repeat(8,22.63em)",
        productCol: "repeat(auto-fit,minmax(22.63em, 1fr))",
      },
      gridTemplateRows: {
        categoryRow: "repeat(4,minmax(30px, 60px))",
        productRow: "repeat(auto-fit,minmax(220px, 220px))",
      },
      gridAutoRows: {
        productAutoRow: "280px",
      },
    },
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "455px" },
    },
  },
  plugins: [],
};
