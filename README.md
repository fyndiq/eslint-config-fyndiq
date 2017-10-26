# eslint-config-fyndiq

An ESLint configuration for Fyndiq projects

This configuration inherits [AirBnB's eslint configuration](//github.com/airbnb/javascript). To install it in one of your projects, do the following:

1. Install eslint
    ``` bash
    npm i -D eslint babel-eslint eslint-config-fyndiq
    ```
1. Install `eslint-import-resolver-webpack`: `npm i -D eslint-import-resolver-webpack`
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
