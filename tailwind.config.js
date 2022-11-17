/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: '767px',
      md: '1025px',
      lg: '1280px',
      xl: '1440px',
    },
    fontSize: {
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.5rem' }],
      xl: ['1.5rem', { lineHeight: '2rem' }],
      '2xl': ['2rem', { lineHeight: '2.5rem' }],
      '3xl': ['2.25rem', { lineHeight: '2.5rem' }],
    },
    fontFamily: {
      sans: ['PT Serif', 'serif'],
    },
    extend: {
      colors: {
        primary: '#000000',
        'grey-100': '#f5f5f5',
        'grey-300': '#e6e6e6',
        'grey-400': '#dadada',
        'grey-800': '#3f3f3f',
        'grey-900': '#2c2c2c',
        'sidebar-mobile': 'hsla(0, 0%, 96%, .85)',
      },
      spacing: {
        '1/8': '12.5%',
        'controlbar': '2.5rem',
        'controlbar-tablet': '3.5rem',
        'header-mobile': '3.5rem',
        'header-tablet': '4rem',
        'header': '5rem',
        'search-bar': '14rem',
        'sidebar-mobile': '83%',
        'sidebar-tablet': '60%',
        'sidebar': '17rem',
        'text-base': '1.5rem',
        'thumbnail': '9.25rem',
      },
      minWidth: {
        'img': '16rem',
      },
      transitionDuration: {
        '350': '350ms',
      },
    },
  },
  plugins: [],
}
