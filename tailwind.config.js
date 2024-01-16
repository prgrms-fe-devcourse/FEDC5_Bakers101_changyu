/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#9F8170'
      },
      translate: {
        '-100': '-100%',
        '-90': '-90%',
        '-80': '-80%',
        '-70': '-70%',
        '-60': '-60%',
        '-50': '-50%',
        '-40': '-40%',
        '-30': '-30%',
        '100': '100%',
        '90': '90%',
        '80': '80%',
        '70': '70%',
        '60': '60%',
        '50': '50%',
        '40': '40%',
        '30': '30%',
      },
    }
  },
  plugins: [require('daisyui')]
}
