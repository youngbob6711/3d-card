/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        skull: "url('./img/bg.png')",
      },
    },
  },
  plugins: [],
};
