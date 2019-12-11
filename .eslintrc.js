  
module.exports = {
  extends: ['react-app', 'prettier/@typescript-eslint', 'plugin:prettier/recommended'],
  plugins: ['react', '@typescript-eslint', 'prettier', 'sort-imports-es6-autofix'],
  env: {
    browser: true,
    jasmine: true,
    jest: true
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
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
