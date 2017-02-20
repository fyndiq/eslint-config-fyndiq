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
    'new-cap': 0,
    'newline-per-chained-call': 0,
    'no-console': 0,
    'no-mixed-operators': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-unused-expressions': 0,
    'no-use-before-define': 0,
    'prefer-template': 0,
    'radix': ['error', 'as-needed'],
    'semi': ['error', 'never'],

    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,

    'jsx-a11y/no-static-element-interactions': 0,

    'react/jsx-filename-extension': 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
  }
}
