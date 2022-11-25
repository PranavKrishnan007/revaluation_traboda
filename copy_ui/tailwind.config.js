module.exports = {
  important: true,
  purge: ['./src/**/*.{jsx,tsx}', './pages/**/*.{jsx,tsx}'],
  darkMode: false,
  theme: {
    placeholderColor: {
      'primary': '#492c49'
    },
    extend: {
      colors: {
        primary: '#492c49',
      },
    },
  },
  variants: {
    extend: {
      zIndex: ['hover'],
      filter: ['hover']
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};