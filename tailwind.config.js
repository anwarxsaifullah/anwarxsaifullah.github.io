/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  theme: {
    container: {
      padding: '16px',
      center: true,
    },
    extend: {
      colors: {
        primary: 'rgb(74, 222, 128)',
        secondary: '#64748b',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px'
      }
    }
  },
  plugins: [],
}

