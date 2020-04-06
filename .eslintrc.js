module.exports = {
  'parser': 'babel-eslint',
  'extends': ['airbnb', 'prettier', 'prettier/react'],
  'rules': {
    'react/jsx-filename-extension': ['warn', { 'extensions': ['.js'] }],
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
  },
  'env': {
    'browser': true,
    'es6': true,
  },
  'plugins': [
    'react',
  ],
  'globals': {
    'graphql': false,
  },
  'parserOptions': {
    'sourceType': 'module',
    'ecmaVersion': 2018,
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'rules': {
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': 'off',
  },
  'settings': {
    'import/resolver': {
      alias: [
        ['components', './src/components'],
        ['pages', './src/pages'],
        ['templates', './src/templates'],
        ['themes', './src/themes'],
        ['utils', './src/utils'],
      ]
    }
  }
};
