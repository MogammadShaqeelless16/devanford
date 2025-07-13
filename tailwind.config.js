/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      colors: {
        amber: {
          50: '#fefdf8',
          100: '#fdf6e3',
          200: '#fae8c1',
          300: '#f6d55c',
          400: '#f1c40f',
          500: '#f39c12',
          600: '#e67e22',
          700: '#d35400',
          800: '#b7950b',
          900: '#9c640c',
        }
      }
    },
  },
  plugins: [],
};