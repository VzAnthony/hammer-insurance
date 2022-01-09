module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#095590",
        "primary-light": "#59A5E3",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      noto: ['"Noto Sans"', "sans-serif"],
      nunito: ['"Nunito Sans"', "sans-serif"],
    },
  },
  plugins: [],
};
