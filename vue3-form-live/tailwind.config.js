module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    opacity: ({ after }) => after(["disabled"]),
    backgroundColor: ({ after }) => after(["disabled"])
  },
  plugins: []
};
