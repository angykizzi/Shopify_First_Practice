/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './src/**/*.{html,js,jsx,ts,tsx}',
    './templates/**/*.{liquid,html}',
    './sections/**/*.{liquid,html}',
    './snippets/**/*.{liquid,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

