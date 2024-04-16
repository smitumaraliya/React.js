/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      translate:{
        'translateX': '-50%',
        'translateY': '-50%',
      },
      textColor:{
        'white' : 'black',
        'black' : 'white',
        'blue' : 'gray',
      },
      height:{
        'h-0' : '500px',
      },
      borderRadius:{
        '1' : '0.1px',
      },
    },
  },
  plugins: [],
}

