module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./index.js"],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 320px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#381913",
      },
      backgroundImage: {
        pattern: "url('./assets/bg.png')",
        absract: "url('./assets/abstract.png')",
        line: "url('./assets/line.png')",
      },
    },
  },
  plugins: [],
};
