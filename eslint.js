module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    mocha: true,
    es6: true
  },
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
    'comma-dangle': ['error', 'always-multiline'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'max-len': 0,
    'no-plusplus': 0,
    'radix': ['error', 'as-needed'],
    'semi': ['error', 'never'],

    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
    'import/prefer-default-export': 0,

    'react/jsx-filename-extension': 0,

    // Allow react-router's `to` prop on Link
    'jsx-a11y/anchor-is-valid': ['error', {
      specialLink: ['to'],
    }],

  }
}
