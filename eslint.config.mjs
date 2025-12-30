import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unicorn from 'eslint-plugin-unicorn';

export default [
  // Ignore generated and dependency folders (replaces .eslintignore)
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'dist/**'],
  },
  // Start from the recommended JS config
  js.configs.recommended,
  // Define console as read-only global to avoid "console is not defined" lint errors
  {
    files: ['**/*'],
    languageOptions: {
      globals: {
        console: 'readonly',
        process: 'readonly',
        window: 'readonly',
        document: 'readonly',
        fetch: 'readonly',
        AbortController: 'readonly',
        TextEncoder: 'readonly',
        TextDecoder: 'readonly',
        globalThis: 'readonly',
      },
    },
  },
  {
    plugins: {
      unicorn,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': 'off',

      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            e2e: true,
          },
          replacements: {
            props: false,
            ref: false,
            params: false,
          },
        },
      ],
    },
  },
  // TypeScript files: use @typescript-eslint parser
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {},
  },
  // Config files that run in node
  {
    files: ['*.config.js', 'prettier.config.js'],
    languageOptions: {
      globals: {
        module: 'writable',
        process: 'readonly',
        require: 'readonly',
      },
    },
  },
  // Ignore code style rule for next-env.d.ts
  {
    files: ['next-env.d.ts'],
    rules: {
      'unicorn/prevent-abbreviations': 'off',
    },
  },
  {
    files: ['**/*.js'],

    rules: {
      'unicorn/prefer-module': 'off',
    },
  },
];
