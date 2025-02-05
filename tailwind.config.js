/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        loki: '#9dff2d',
        darkLoki: '#060f07',
        lightLoki: '#FAFFF4',
        darkGray: '#242424',
        fadeWhite: '#9B9F9C',
        lightGray: '#DBDBDB',
        lightGreen: '#CDFF83',
      },
      dropShadow: {
        'neon': '0 0 35px rgba(157, 255, 45, 0.45)',
        'dark': '0 15px 35px rgba(0, 0, 0, 0.45)',
      },
      animation: {
        'marquee': 'marquee 10s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(00%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        spin: {
          '0%': { transform: 'rotate(0)'},
          '100%': { transform: 'rotate(360deg)'},
        },
      },
    },
    fontFamily: {
      monu: 'monu',
      drugLI: 'drugLI',
      drugL: 'drugL',
      drugReg: 'drugReg',
      drugTI: 'drugTI',
      ivyIt: 'ivy-it',
      ivy: 'ivy',
    },
    screens: {
      '4xsm': '280px',
      '3xsm': '390px',
      '2xsm': '420px',
      'xsm': '480px',
      '2md': '860px',
      '3md': '992px',
      ...defaultTheme.screens,
    },
    
    
  },
  plugins: [],
}

