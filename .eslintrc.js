module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: { browser: true, node: true },
  plugins: ['html', 'prettier'],
  extends: ['problems', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['**/*.test.js'],
      env: { jest: true },
    },
  ],
};
