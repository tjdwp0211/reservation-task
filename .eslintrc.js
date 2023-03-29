module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@babel/eslint-parser",
  extends: ["prettier"],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: [],
  rules: {},
};
