/* eslint-disable sort-keys/sort-keys-fix */
/** @type {import('tailwindcss').Config} */
import twScrollbar from 'tailwind-scrollbar';

export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [twScrollbar()],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: {
          DEFAULT: 'rgb(var(--primary-500))',
          50: 'rgb(var(--primary-50))',
          100: 'rgb(var(--primary-100))',
          200: 'rgb(var(--primary-200))',
          300: 'rgb(var(--primary-300))',
          400: 'rgb(var(--primary-400))',
          500: 'rgb(var(--primary-500))',
          600: 'rgb(var(--primary-600))',
          700: 'rgb(var(--primary-700))',
          800: 'rgb(var(--primary-800))',
          900: 'rgb(var(--primary-900))',
          950: 'rgb(var(--primary-950))',
        },
        surface: {
          0: 'rgb(var(--surface-0))',
          50: 'rgb(var(--surface-50))',
          100: 'rgb(var(--surface-100))',
          200: 'rgb(var(--surface-200))',
          300: 'rgb(var(--surface-300))',
          400: 'rgb(var(--surface-400))',
          500: 'rgb(var(--surface-500))',
          600: 'rgb(var(--surface-600))',
          700: 'rgb(var(--surface-700))',
          800: 'rgb(var(--surface-800))',
          900: 'rgb(var(--surface-900))',
          950: 'rgb(var(--surface-950))',
        },
        white: 'rgb(var(--white))',
        'body-bg': 'rgb(var(--body-bg))',
        'body-text-color': 'rgb(var(--body-text-color))',
        'selection-bg': 'rgb(var(--selection-bg))',
        'selection-text-color': 'rgb(var(--selection-text-color))',
      },
    },
  },
};
