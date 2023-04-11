module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['prettier'],
  ignorePatterns: ['/**/build', '/**/*.json', '/**/*.config.js', '/**/.out/*', '.prettierrc.js'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {},
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended', // TypeScript rules
      ],
      rules: {
        'no-extra-semi': 2,
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/no-onchange': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        'padding-line-between-statements': 'off',
        '@typescript-eslint/padding-line-between-statements': [
          'error',
          { blankLine: 'always', prev: '*', next: 'return' },
          { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
          { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
          { blankLine: 'always', prev: ['import'], next: '*' },
          { blankLine: 'any', prev: ['import'], next: ['import'] },
          { blankLine: 'always', prev: '*', next: ['interface', 'type', 'export'] },
          { blankLine: 'always', prev: 'directive', next: '*' },
          { blankLine: 'any', prev: 'directive', next: 'directive' },
          { blankLine: 'always', prev: ['case', 'default'], next: '*' },
        ],
      },
    },
  ],
};
