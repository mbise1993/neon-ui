  
module.exports = {
  extends: ['prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint', 'prettier', 'sort-imports-es6-autofix'],
  env: {
    browser: true,
    jest: true
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'sort-imports-es6-autofix/sort-imports-es6': ['error', {
      ignoreCase: true,
      memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple']
    }],
    'prettier/prettier': 'error'
  }
};
