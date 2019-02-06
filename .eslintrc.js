module.exports = {
  'extends': 'airbnb',
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
};
