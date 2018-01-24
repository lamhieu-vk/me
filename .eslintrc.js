module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "react-tools"],
  plugins: ["flowtype"],
  globals: {},
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  rules: {
    "function-paren-newline": 0,
    "no-console": ["error", { allow: ["warn", "error"] }],
    semi: [2, "never"],
    "linebreak-style": 0,
    "no-underscore-dangle": 0,
    "no-duplicate-imports": 0,
    "object-curly-newline": 0,
    "react/jsx-filename-extension": 0,
    "react/sort-comp": 0,
    "max-len": 0,
    "import/no-named-as-default": 0,
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "flowtype/define-flow-type": 1,
    "flowtype/use-flow-type": 1,
    "react/no-array-index-key": 0,
    "react/no-unused-prop-types": 0,
    "react/require-default-props": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/iframe-has-title": 0,
    "jsx-a11y/media-has-caption": 0,
    "jsx-a11y/mouse-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "no-mixed-operators": [
      "error",
      {
        groups: [
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"]
        ],
        allowSamePrecedence: true
      }
    ]
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "eslint-webpack-config.js"
      }
    }
  }
};
