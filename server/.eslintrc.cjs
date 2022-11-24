module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: ["eslint:recommended"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
  },
  rules: {
    // prettier does double quotes so make that the default
    quotes: ["error", "double"],
    // block any code that is not formatted according to prettier formatting rules
    "prettier/prettier": "error",
    // turned off the rule to make everything a default export
    "import/prefer-default-export": "off",
    // turned off the rule that you should not have file extensions. For modules in node this is actually required
    "import/extensions": "off",
    "no-console": "warn",
  },
};
