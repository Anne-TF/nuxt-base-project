module.exports = {
  // https://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy
  // This option interrupts the configuration hierarchy at this file
  // Remove this if you have an higher level ESLint config file (it usually happens into a monorepos)
  root: true,

  // https://eslint.vuejs.org/user-guide/#how-to-use-a-custom-parser
  // Must use parserOptions instead of "parser" to allow vue-eslint-parser to keep working
  // `parser: 'vue-eslint-parser'` is already included with any 'plugin:vue/**' config and should be omitted
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: [ '.vue' ],
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      "jsx": true
    }
  },

  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    // Base ESLint recommended rules
    // 'eslint:recommended',

    // https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage
    // ESLint typescript rules
    'plugin:@typescript-eslint/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],

  plugins: [
    // required to apply rules which need type information
    '@typescript-eslint',
    // required to lint *.vue files
    'vue'
  ],
  noInlineConfig: false,
  ignorePatterns: ['.eslintrc.cjs'],

  globals: {
    ga: 'readonly', // Google Analytics
    process: 'readonly',
    chrome: 'readonly'
  },

  // add your custom rules here
  rules: {
    'prefer-promise-reject-errors': 'off',

    quotes: ['warn', 'single', { avoidEscape: true }],
    // this rule, if on, would require explicit return type on the `render` function
    '@typescript-eslint/explicit-function-return-type': 'off',

    // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
    '@typescript-eslint/no-var-requires': 'off',
    "indent": "off",
    "@typescript-eslint/indent": [
      "error",
      4
    ],

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: ['warn', 'always'],
    'semi-spacing': ['warn', { before: false, after: true }],
    'comma-spacing': ['warn', { before: false, after: true }],
    'space-infix-ops': 2,
    'space-in-parens': [1, 'never'],
    'spaced-comment': ['error', 'always'],
    'array-bracket-spacing': ['warn', 'never'],
    'object-curly-spacing': ['warn', 'always'],
    'block-spacing': 'warn',
    'arrow-spacing': 'warn',
    'space-before-function-paren': ['warn', 'never'],
    'keyword-spacing': ['warn', { before: true }],
    // 'linebreak-style': ['error', 'unix'],
    'brace-style': ['error', 'allman'],
    'prefer-const': ['warn'],
    'max-len': [
      'error',
      {
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        code: 500,
      },
    ],
    'no-shadow-restricted-names': 'error',
    'no-sequences': 'error',
    'no-new-wrappers': 'error',
    'no-multiple-empty-lines': 'warn',
    'no-eval': 'error',
    'no-fallthrough': 'warn',
    'no-invalid-this': 'off',
    'no-cond-assign': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'off',
    'no-caller': 'error',
    'new-parens': 'error',
    'max-lines': ['warn', 1800],
    'no-trailing-spaces': [
      'warn',
      { ignoreComments: false, skipBlankLines: false },
    ],
    'no-prototype-builtins': 'warn',
    "no-unused-vars": "off",
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    'no-console': 1,
    'prefer-template': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'off',
    'no-unsafe-finally': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'object-shorthand': 'warn',
    'one-var': ['warn', 'never'],
    'prefer-object-spread': 'error',
    'quote-props': ['error', 'consistent-as-needed'],
    radix: 'error',
    curly: 'warn',
    'use-isnan': 'error',

    '@typescript-eslint/no-use-before-define': [
      'warn',
      { functions: true, variables: true, classes: false },
    ],
    '@typescript-eslint/ban-types': [
      'warn', // <- OEP. Fix about use object
      {
        types: {
          Object: {
            message:
              'Avoid using the `Object` type. Did you mean `object`?',
          },
          Function: {
            message:
              'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
          },
          Boolean: {
            message:
              'Avoid using the `Boolean` type. Did you mean `boolean`?',
          },
          Number: {
            message:
              'Avoid using the `Number` type. Did you mean `number`?',
          },
          String: {
            message:
              'Avoid using the `String` type. Did you mean `string`?',
          },
          Symbol: {
            message:
              'Avoid using the `Symbol` type. Did you mean `symbol`?',
          },
        },
      },
    ],
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-unsafe-return": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/restrict-template-expressions": 0,
    "@typescript-eslint/unbound-method": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/no-unsafe-assignment": 0,

    "@typescript-eslint/type-annotation-spacing": "warn",
    "@typescript-eslint/no-unsafe-argument": 0,

    // '@typescript-eslint/no-unnecessary-type-assertion': 'off',

    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/require-await': 0,
    'no-mixed-spaces-and-tabs': 0,
    'vue/multi-word-component-names': ['error', {
      'ignores': ['Login', 'Logo', 'Dropzone', 'Footer', 'Landing', 'index']
    }]
  }
}
