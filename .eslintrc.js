module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['node', 'import'],
  env: {
    node: true,
    es2021: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
