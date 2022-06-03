module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        tablet: "768px",
        desktop: "1440px",
      },
      colors: {
        black: "#000",
        white: "#fff",
        gray: {
          200: "#cfcfcf",
        },
        purple: {
          500: "#7541c8",
        },
        blue: {
          100: "#ecf2f8",
          600: "#48556a",
          800: "#19212e",
        },
      },
    },
  },
  plugins: [],
};
