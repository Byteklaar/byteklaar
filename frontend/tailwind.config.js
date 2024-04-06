/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        '2xl': '1600px',
      },
      center: true,
    },
    fontFamily: {
      display: ['"Avantt-Medium"', 'sans-serif'],
    },
    extend: {
      colors: {
        'byte-blue': '#0000FF',
        'byte-terra': '#DD6030',
        'byte-purple': '#9792E3',
        'byte-beige': '#DDD3BF',
      },
    },
  },
  plugins: [],
};