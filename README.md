# eslint-config-fyndiq

An ESLint configuration for Fyndiq projects

This configuration inherits [AirBnB's eslint configuration](//github.com/airbnb/javascript). To install it in one of your projects, do the following:

1. Run `npm i --save-dev eslint-config-fyndiq`
1. Install the peer dependencies requested by NPM (`eslint-plugin-react`, `eslint-plugin-jsx-a11y`, `eslint-plugin-import`, `babel-eslint`)
1. Install `eslint-import-resolver-webpack`: `npm i --save-dev eslint-import-resolver-webpack`
1. Create an `.eslintrc` config using this template
```json
{
  "extends": "fyndiq",
  "rules": {
    "...": "..."
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "path/to/your/webpack.config.js"
      }
    }
  }
}
```
