/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'card-image': "url('assets/card.png')",
      },
      fontFamily: {
        gloria: ['Gloria Hallelujah', 'cursive'],
      },
    },
  },
  plugins: [],
};
