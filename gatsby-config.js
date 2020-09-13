const path = require('path');
const title = 'Andrew Mok';

module.exports = {
  siteMetadata: {
    title,
    author: 'Andrew',
    authorDescription: `I'm a software engineer based in Hong Kong.`,
    description: 'Software engineer based in Hong Kong.',
    siteUrl: 'https://andrewmmc.com',
    seoKeywords: [
      'blog',
      'andrew',
      'andrewmok',
      'Andrew Mok',
      'andrewmmc',
      'software developer',
      'web developer',
      'coder',
      'software engineer',
      'engineer',
      'hacker',
      'Hong Kong developer',
      'Hong Kong engineer',
      '程序員',
      '軟體工程師',
      '網頁編寫員',
    ],
    location: 'Hong Kong',
    email: 'hello@andrewmmc.com',
    social: {
      github: 'andrewmmc',
      linkedin: 'andrewmmc',
      facebook: '',
      instagram: '',
      twitter: 'andrewmmc',
      medium: '@andrewmmc',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-N97P56B',
        includeInDevelopment: false,
      },
    },
    {
      resolve: 'gatsby-theme-minimalism',
      options: {
        siteName: title,
        mapId: '',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        htmlTitle: `${title} - Admin Panel`,
        modulePath: path.join(__dirname, 'src/cms/cms.js'),
      },
    },
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify',
  ],
};
