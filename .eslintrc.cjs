module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  root: true,
  extends: [
    require.resolve('eslint-config-airbnb'),
    require.resolve('eslint-config-airbnb/hooks'),
    require.resolve('eslint-config-airbnb-typescript')
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react/function-component-definition': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export' : 0,
    'react-hooks/exhaustive-deps': 1
  },
}
