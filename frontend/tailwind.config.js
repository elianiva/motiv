const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.svelte"],
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
      width: {
        'smol': '30rem'
      },
      maxWidth: {
        'smol': '100%'
      },
      gridTemplateColumns: {
        '4-responsive-sm': 'repeat(auto-fit, 14.5rem)',
        '4-responsive': 'repeat(auto-fit, minmax(11rem, 1fr))',
        '5-responsive': 'repeat(auto-fit, minmax(8rem, 1fr))'
      },
      boxShadow: {
        'blue': '0 0.25rem 0.5rem rgba(66, 153, 225, 0.5)',
        'green': '0 0.25rem 0.5rem rgba(72, 187, 120, 0.5)'
      },
    },
  },
  variants: {},
  plugins: [],
}
