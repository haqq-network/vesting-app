/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/!(*.stories|*.spec).{js,jsx,ts,tsx,mdx}'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--ui-kit-font-sans)'],
        serif: ['var(--ui-kit-font-serif)'],
      },
      colors: {
        primary: 'var(--ui-kit-color-primary)',
        black: 'var(--color-black)',
        'light-green': 'var(--color-light-green)',
        'dark-gray': 'var(--color-dark-gray)',
      },
    },
  },
  plugins: [],
};
