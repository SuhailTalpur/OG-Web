/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        'myblue': '#d09f90',
        'mypink': '#fff4c7',
        'mypink2': '#f0631c',
        'mybtnbg': '#d09f90',
        'mybg': '#ff914d',
      },
      
    },
  },
  plugins: [],
}

