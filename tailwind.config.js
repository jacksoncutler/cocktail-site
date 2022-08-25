/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontSize: {
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.5rem', { lineHeight: '2rem' }],
      '2xl': ['2.25rem', { lineHeight: '2.5rem' }],
    },
    fontFamily: {
      sans: ['PT Serif', 'serif'],
    },
    extend: {
      colors: {
        primary: '#000000',
        'grey-100': '#f5f5f5',
        'grey-400': '#dadada',
        'grey-900': '#2c2c2c',
      },
      spacing: {
        'header': '5rem',
        'sidebar': '16rem',
        'thumbnail': '9.375rem',
      },
    },
  },
  plugins: [],
}
