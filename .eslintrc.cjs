/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        bracketSameLine: true,
        arrowParens: 'avoid',
        htmlWhitespaceSensitivity: 'css',
        // vueIndentScriptAndStyle: true,
        endOfLine: 'auto'
      }
    ],
    curly: 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'dot-location': ['error', 'property'],
    'keyword-spacing': 'error',
    eqeqeq: ['error', 'always']
  }
}
