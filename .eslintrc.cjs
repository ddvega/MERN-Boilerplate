module.exports = {
  root: true,
  extends: [
    'airbnb',
    'prettier',
    'eslint-config-prettier',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['react-hooks', 'prettier'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    'max-len': 'off',
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'warn',
    'no-console': 'off',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
};
