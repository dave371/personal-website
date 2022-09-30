/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        spinL: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '10%': {
            transform: 'rotate(-36deg)',
          },
          '20%': {
            transform: 'rotate(-72deg)',
          },
          '30%': {
            transform: 'rotate(-108deg)',
          },
          '40%': {
            transform: 'rotate(-144deg)',
          },
          '50%': {
            transform: 'rotate(-180deg)',
          },
          '60%': {
            transform: 'rotate(-216deg)',
          },
          '70%': {
            transform: 'rotate(-252deg)',
          },
          '80%': {
            transform: 'rotate(-288deg)',
          },
          '90%': {
            transform: 'rotate(-324deg)',
          },
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
        spinR: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '10%': {
            transform: 'rotate(36deg)',
          },
          '20%': {
            transform: 'rotate(72deg)',
          },
          '30%': {
            transform: 'rotate(108deg)',
          },
          '40%': {
            transform: 'rotate(144deg)',
          },
          '50%': {
            transform: 'rotate(180deg)',
          },
          '60%': {
            transform: 'rotate(216deg)',
          },
          '70%': {
            transform: 'rotate(252deg)',
          },
          '80%': {
            transform: 'rotate(288deg)',
          },
          '90%': {
            transform: 'rotate(324deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        spinLeft: 'spinL 5s linear infinite',
        spinRight: 'spinR 5s linear infinite',
      },
    },
    plugins: [],
  },
};
