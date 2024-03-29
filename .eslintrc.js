const {
  dependencies: { react: reactVersion },
} = require('./package.json');

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'prettier',
    '@emotion',
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/no-var-requires': 0,
  },
  settings: {
    react: {
      version: reactVersion,
    },
  },
};
