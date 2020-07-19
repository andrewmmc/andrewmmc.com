const title = 'Andrew Mok';

module.exports = {
  siteMetadata: {
    title,
    author: 'Andrew',
    authorDescription:
      'Software developer based in Hong Kong. Passionate about developing web applications with high-quality code, and enjoy creating beautiful, simple and elegant web applications.',
    description:
      'Personal blog by Andrew Mok, a software developer based in Hong Kong.',
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
      // facebook: 'thepolarlab',
      // instagram: 'thepolarlab',
      twitter: 'andrewmmc',
      medium: 'thepolarlab',
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
        convertKitFormId: '1373319',
        mapId: '',
      },
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        htmlTitle: `${title} - Admin Panel`,
      },
    },
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify',
  ],
};
