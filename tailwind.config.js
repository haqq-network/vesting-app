/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/!(*.stories|*.spec).{js,jsx,ts,tsx,mdx,html}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--ui-kit-font-sans)'],
        serif: ['var(--ui-kit-font-serif)'],
      },
      colors: {
        primary: 'var(--ui-kit-color-primary)',
        danger: 'var(--ui-kit-color-danger)',
        black: 'var(--color-black)',
        'light-green': 'var(--color-light-green)',
        'light-gray': 'var(--color-light-gray)',
        'dark-gray': 'var(--color-dark-gray)',
      },
    },
  },
  plugins: [],
};
