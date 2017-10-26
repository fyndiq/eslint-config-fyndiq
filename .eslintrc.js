const prettierConfig = require('./prettier.config')

module.exports = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
    'plugin:jest/recommended',
  ],
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true,
    jest: true,
  },
  plugins: [
    'jest',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': 0,
    'no-plusplus': 0,
    'radix': ['error', 'as-needed'],

    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
    'import/prefer-default-export': 0,

    'react/jsx-filename-extension': 0,

    // Allow react-router's `to` prop on Link
    'jsx-a11y/anchor-is-valid': ['error', {
      specialLink: ['to'],
    }],

    'prettier/prettier': ['error', prettierConfig],
  }
}
