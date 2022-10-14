/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'orange-primary': '#FD7D00',
        'red-danger': '#FF3B30',
        'black-opacity': 'rgba(90, 90, 90, 0.7)',
      },
      borderColor: {
        Rectanger: 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
