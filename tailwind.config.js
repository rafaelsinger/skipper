/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#121212',
        'primary': '#17C378',
        'primary-shadow': '#18965F',
        'primary-dark': '#13a566',
        'primary-disabled': '#13784b',
        'primary-disabled-shadow': '#0e5938',
        'focus': "#218FDF",
        'success': '#6EB078',
        'warning': '#EEF147',
        'error': '#D32F2F',
        'header': '#57BB8C',
        'menu': '#68A7E8',
        'card': '#1E1E1E',
        'light-card': '#383838',
        'white-80': '#CACACA'
      },
    }
  },
  plugins: [],
}
