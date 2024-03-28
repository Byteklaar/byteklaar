/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      display: ['"Avantt-Medium"', 'sans-serif'],
    },
    extend: {
      colors: {
        'byte-blue': '#0000FF',
      },
    },
  },
  plugins: [],
};