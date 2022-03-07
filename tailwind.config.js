const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['AvenirNext', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '9xl': '9rem' 
      },
      colors: {
        'cobots-green': '#45E545',
        'cobots-red': '#FF5967',
        'cobots-silver': '#CED5D9',
        'cobots-silver-2': '#919699',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
