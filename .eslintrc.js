// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-config/patch/modern-module-resolution');

module.exports = {
  root: true,
  ignorePatterns: ['dist'],
  parserOptions: {
    ecmaVersion: 2020,
    tsconfigRootDir: __dirname,
  },
  plugins: ['import', 'jsx-a11y', 'react-hooks', 'simple-import-sort'],
  extends: [
    '@rushstack/eslint-config/profile/web-app',

    // TODO: activate ASAP
    //'@rushstack/eslint-config/mixins/friendly-locals',

    'plugin:react/jsx-runtime',
    'plugin:fp-ts/recommended',
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // RATIONALE:         We dont need to enforce this rule in TypeScript
        '@rushstack/typedef-var': 'off',

        // TODO: activate every rule ASAP (remove it from the list)
        '@rushstack/no-new-null': 'off',
        '@typescript-eslint/typedef': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/no-parameter-properties': 'off',

        // Extras
        '@typescript-eslint/ban-types': [
          'error',
          {
            types: {
              Array: 'Use `[]` instead.',
            },
          },
        ],

        // https://github.com/lydell/eslint-plugin-simple-import-sort
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',

        // https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
        'import/first': 'error',
        'import/no-amd': 'error',
        'import/no-webpack-loader-syntax': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        'import/no-anonymous-default-export': [
          'error',
          {
            allowArray: false,
            allowArrowFunction: false,
            allowAnonymousClass: false,
            allowAnonymousFunction: false,
            allowCallExpression: false,
            allowLiteral: false,
            allowObject: true, // For Storybook stories
          },
        ],

        // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
        'react/forbid-foreign-prop-types': ['error', { allowInPropTypes: true }],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': [
          'error',
          {
            allowAllCaps: true,
            ignore: [],
          },
        ],
        'react/no-danger-with-children': 'error',
        // Disabled because of undesirable errors
        // See https://github.com/facebook/create-react-app/issues/5204 for
        // blockers until its re-enabled
        // 'react/no-deprecated': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-is-mounted': 'error',
        'react/no-typos': 'error',
        'react/require-render-return': 'error',
        'react/style-prop-object': 'error',
        'react/no-children-prop': 'off', // TODO: set error ASAP
        'react/no-unescaped-entities': 'off', // TODO: set error ASAP

        // RATIONALE:         When React components are added to an array, they generally need a "key".
        'react/jsx-key': 'off', // TODO: set error ASAP

        // RATIONALE:         Catches a common coding practice that significantly impacts performance.
        'react/jsx-no-bind': 'off', // TODO: set error ASAP

        // RATIONALE:         Fixes the no-unused-vars rule to make it compatible with React
        'react/jsx-uses-react': 'error',

        // RATIONALE:         Fixes the no-unused-vars rule to make it compatible with React
        'react/jsx-uses-vars': 'error',

        // RATIONALE:         Avoids usage of deprecated APIs.
        // Note that the set of deprecated APIs is determined by the "react.version" setting.
        'react/no-deprecated': 'error',

        // RATIONALE:         Avoids a potential performance problem.
        'react/no-find-dom-node': 'error',

        // RATIONALE:         Deprecated API.
        'react/no-render-return-value': 'error',

        // RATIONALE:         Deprecated API.
        'react/no-string-refs': 'error',

        // RATIONALE:         Improves syntax for some cases that are not already handled by Prettier.
        'react/self-closing-comp': 'error',

        // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',

        // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
        'jsx-a11y/alt-text': 'error',
        'jsx-a11y/anchor-has-content': 'error',
        'jsx-a11y/anchor-is-valid': [
          'error',
          {
            aspects: ['noHref', 'invalidHref'],
          },
        ],
        'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
        'jsx-a11y/aria-props': 'error',
        'jsx-a11y/aria-proptypes': 'error',
        'jsx-a11y/aria-role': ['error', { ignoreNonDOM: true }],
        'jsx-a11y/aria-unsupported-elements': 'error',
        'jsx-a11y/heading-has-content': 'error',
        'jsx-a11y/iframe-has-title': 'error',
        'jsx-a11y/img-redundant-alt': 'error',
        'jsx-a11y/no-access-key': 'error',
        'jsx-a11y/no-distracting-elements': 'error',
        'jsx-a11y/no-redundant-roles': 'error',
        'jsx-a11y/role-has-required-aria-props': 'error',
        'jsx-a11y/role-supports-aria-props': 'error',
        'jsx-a11y/scope': 'error',
      },
    },
  ],
  settings: {
    react: {
      version: '17.0',
    },
  },
};
