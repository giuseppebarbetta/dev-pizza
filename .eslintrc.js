module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['prettier', 'standard'],
  plugins: ['prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    camelcase: 'off',
    'space-before-function-paren': 'off',
    'comma-dangle': 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
}
