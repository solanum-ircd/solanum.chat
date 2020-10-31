module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      display: ['Nunito', 'sans-serif'],
      sans: ['Poppins', 'sans-serif'],
      mono: ['\'Ubuntu Mono\'', 'monospace']
    },
    maxWidth: {
      '2xs': '16rem',
      '3xs': '14rem',
      '4xs': '10rem'
    },
    extend: {},
  },
  variants: {},
  future: {
    removeDeprecatedGapUtilities: true
  },
  plugins: [
    // require('@tailwindcss/typography')
  ]
}
