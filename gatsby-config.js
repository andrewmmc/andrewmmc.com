const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Andrew Mok',
    author: 'Andrew Mok',
    description: 'Personal blog by Andrew Mok, a web developer from Hong Kong. I write and I code.',
    siteUrl: 'https://andrewmmc.com',
    location: 'Hong Kong',
    email: 'hello@andrewmmc.com',
    social: {
      twitter: 'andrewmmc',
      github: 'andrewmmc',
      linkedin: 'andrewmmc',
      medium: 'andrewmmc',
      vsco: 'andrewmmc',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, 'src/components'),
        pages: path.join(__dirname, 'src/pages'),
        templates: path.join(__dirname, 'src/templates'),
        utils: path.join(__dirname, 'src/utils'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false,
              showCaptions: true,
              sizeByPixelDensity: true,
              quality: 90,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-reading-time',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-N97P56B',
        includeInDevelopment: false,
      },
    },
    'gatsby-plugin-feed',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify-cache',
  ],
};
