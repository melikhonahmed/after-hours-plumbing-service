/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        canvas: '#F6F6F2',
        ink: '#090D15',
        inkpanel: '#101726',
        brandred: '#DC2626',
        brandreddark: '#B91C1C',
        brandblue: '#0284C7',
        brandbluedark: '#0369A1',
        iceblue: '#E0F2FE',
        hydraulicsky: '#38BDF8',
        warmgray: '#EAEAE4'
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Instrument Serif', 'Georgia', 'serif']
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
