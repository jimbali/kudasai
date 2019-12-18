module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended" // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  overrides: [
    {
      files: ["serviceWorker.ts"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-use-before-define": "off"
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true // Allows for the parsing of JSX
    }
  },
  plugins: ["import"],
  rules: {
    "curly": ["error", "multi-line"],
    "sort-keys": "warn",
    "import/order": "warn",
    "quotes": ["error", "single"],
    "jsx-quotes": ["error", "prefer-double"],
    "semi": "off",
    "@typescript-eslint/semi": ["error", "never"],
    "comma-dangle": ["error", "never"]
  },
  settings: {
    react: {
      version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  }
};