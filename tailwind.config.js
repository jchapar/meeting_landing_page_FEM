/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        teal: '#4d96a9',
        purple: '#855fb1',
        dark: '#28283d',
        grey: '#87879d',
        lightBlue: '#8fe3f9',
        lightPurple: '#d9b8ff',
      },
      fontFamily: {
        sans: ['Red Hat Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
