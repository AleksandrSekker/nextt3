/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const CardFlip = plugin(({ addUtilities }) => {
    addUtilities({
        '.my-rotate-y-180': {
            transform: 'rotateY(180deg)'
        },
        '.my-rotate-y-0': {
            transform: 'rotateY(0deg)'
        },

        '.preserve-3d': {
            transformStyle: 'preserve-3d'
        },
        '.perspective': {
            perspective: '1000px'
        },
        '.backface-hidden': {
            backfaceVisibility: 'hidden'
        }
    })
})
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
          pinkHeader: "#C786ED",
          orangeColor: '#FF7D00;'
        }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'), CardFlip],
};
