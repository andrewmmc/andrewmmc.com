require('dotenv').config();
const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Andrew Mok',
    description: 'Software engineer based in Hong Kong.',
    siteUrl: 'https://andrewmmc.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GTM_ID || '',
        includeInDevelopment: false,
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        pages: path.join(__dirname, 'src/pages'),
        templates: path.join(__dirname, 'src/templates'),
        themes: path.join(__dirname, 'src/themes'),
        utils: path.join(__dirname, 'src/utils'),
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'andrewmmc-com',
        accessToken: process.env.PRISMIC_TOKEN || '',
        // https://prismic.io/docs/javascript/query-the-api/link-resolving
        linkResolver: () => (doc) => doc.uid,
        schemas: {
          /* eslint-disable global-require */
          about: require('./src/schemas/about.json'),
          settings: require('./src/schemas/settings.json'),
          blog_post: require('./src/schemas/blog_post.json'),
          note_post: require('./src/schemas/note_post.json'),
          project_post: require('./src/schemas/project_post.json'),
          /* eslint-enable global-require */
        },
        imageImgixParams: {
          auto: 'compress,format',
          fit: 'max',
          q: 85,
        },
        imagePlaceholderImgixParams: {
          w: 100,
          blur: 15,
          q: 50,
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify',
  ],
};
