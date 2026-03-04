import nextConfig from 'eslint-config-next';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import tseslint from '@typescript-eslint/eslint-plugin';
import boundaries from 'eslint-plugin-boundaries';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
  ...nextConfig,
  { ignores: ['.next/', 'node_modules/', 'build/**', 'next-env.d.ts', '**/*.css'] },

  {
    files: ['*.config.{js,mjs,cjs,ts}', '*.mjs'],
    rules: {
      'import/no-anonymous-default-export': 'off',
    },
  },

  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
      '@typescript-eslint': tseslint,
      boundaries,
      'simple-import-sort': simpleImportSort,
    },

    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },

    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },

      'boundaries/elements': [
        { type: 'shared', pattern: 'src/shared/*' },
        { type: 'entities', pattern: 'src/entities/*' },
        { type: 'features', pattern: 'src/features/*' },
        { type: 'widgets', pattern: 'src/widgets/*' },
        { type: 'app', pattern: 'src/app/*' },
      ],
    },

    rules: {
      // FSD архитектура
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            { from: 'shared', allow: ['shared'] },
            { from: 'entities', allow: ['shared', 'entities'] },
            { from: 'features', allow: ['shared', 'entities', 'features'] },
            { from: 'widgets', allow: ['shared', 'entities', 'features', 'widgets'] },
            { from: 'app', allow: ['*'] },
          ],
        },
      ],

      // Импорты
      'import/no-unresolved': 'error',
      'import/no-default-export': 'off',

      // Сортировка импортов
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // TypeScript
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',

      // React 19
      'react/jsx-no-useless-fragment': 'warn',
      'react/no-unknown-property': 'error',

      // Prettier
      'prettier/prettier': 'error',

      // Прочее
      'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
      'no-restricted-imports': [
        'error',
        {
          patterns: ['../*../*'],
        },
      ],
    },
  },
];
