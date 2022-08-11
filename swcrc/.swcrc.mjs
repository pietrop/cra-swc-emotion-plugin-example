{
  "exclude": ".test.js$|.stories.js$|examples.js$|setupTests.js$",
  "jsc": {
    "parser": {
      "syntax": "ecmascript",
      "jsx": true,
      "numericSeparator": false,
      "classPrivateProperty": false,
      "privateMethod": false,
      "classProperty": false,
      "functionBind": false,
      "decorators": false,
      "decoratorsBeforeExport": false
    },
    "transform": {
      "react": {
        "runtime": "automatic",
        "pragma": "React.createElement",
        "pragmaFrag": "React.Fragment",
        "throwIfNamespace": true,
        "development": false,
        "useBuiltins": false
      },
      "optimizer": {
        "globals": {
          "vars": {
            "__DEBUG__": "true"
          }
        }
      }
    }
  }
}
