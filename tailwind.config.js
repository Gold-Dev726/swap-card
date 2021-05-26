module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  important: true,
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    // textColor: {
    //   'primary': '#d6f732',
    //   'secondary': '#f36903',
    //   // 'danger': '#e3342f',
    // },
    borderColor: {
      'primary': '#d6f732',
      'secondary': '#f36903',
      // 'danger': '#e3342f',
    }
  },
  variants: {
    extend: {
      zIndex: ['hover', 'active'],
    },
  },
  plugins: [],
}
