/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    color: {
      green: {
        pale: '#E8F5E9',
        soft: '#A5D6A7',
        moss: '#68855C',
        olive: '#556C42',
        dark: '#364027',
        extraDark: '#2d433f',
      },
      blue: {
        dark: '#2D3643',
        medium: '#2D3643',
        mediumLight: '#3373CC',
        light: '#C4DAF9',
        extraLight: '#F4F7FA',
      },
      gray: {
        dark: '#333333',
        medium: '#4F4F4F',
        mediumLight: '#BDBDBD',
        light: '#E0E0E0',
        extraLight: '#F2F2F2',
      },
      red: {
        dark: '#432E2D',
        medium: '#5C221F',
        mediumLight: '#CC3B33',
        light: '#F9C6C3',
        extraLight: '#FAF5F4',
      },
      orange: {
        dark: '#43342D',
        medium: '#5C331F',
        mediumLight: '#CC6633',
        light: '#F9D5C3',
        extraLight: '#FAF6F4',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
