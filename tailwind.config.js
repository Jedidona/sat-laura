/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#dae3f0',
          200: '#b8cce3',
          300: '#8aadd0',
          400: '#5c8bba',
          500: '#3a6ea3',
          600: '#2c5588',
          700: '#1e3a5f',
          800: '#162c4a',
          900: '#0e1e33',
        },
        academic: {
          50: '#fdf2f2',
          100: '#fce4e4',
          200: '#f9c7c7',
          300: '#f49898',
          400: '#ec5c5c',
          500: '#dc2626',
          600: '#b91c1c',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#6b1a1a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};