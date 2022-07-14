/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      colors: {
        primary: '#FB8F1D',
        secondary: '#1ABE84',
        dark: '#202336',
        black: '#231F20',
        gray: '#B8BECD',
        semiblack: '#656263',
        brokenwhite: '#F6F6F6',
        gray2: '#F9F9FB',
      },
    },
  },
  plugins: [],
};
