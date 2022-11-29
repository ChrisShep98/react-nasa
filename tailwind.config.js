/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
    './public/index.html'
  ],
  theme: {
    extend: {
      width: {
        picWidth: '60vw'
      },
      height: {
        picHeight: '70vh'
      }
    },
  },
  screens: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
    xxl: '1920px'
  },
  plugins: [],
}
