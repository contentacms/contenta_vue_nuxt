module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: { node: true },
  plugins: ['prettier'],
  extends: ['problems', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['**/*.test.js'],
      env: { jest: true },
    },
  ],
};
