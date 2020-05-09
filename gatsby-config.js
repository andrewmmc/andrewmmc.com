const path = require('path');

const title = 'Andrew Mok';

module.exports = {
  siteMetadata: {
    title,
    author: 'Andrew Mok',
    authorDescription:
      'Software Developer based in Hong Kong. Currently at PwC.',
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
    mapId: '',
    location: 'Hong Kong',
    email: 'hello@andrewmmc.com',
    social: {
      github: 'andrewmmc',
      linkedin: 'andrewmmc',
      facebook: '',
      instagram: '',
      // facebook: 'thepolarhacker',
      // instagram: 'thepolarhacker',
      twitter: 'andrewmmc',
      medium: 'thepolarhacker',
    },
  },
  plugins: [
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
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Inter:400,600,700'],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-N97P56B',
        includeInDevelopment: false,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return {
                  ...edge.node.frontmatter,
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                };
              });
            },
            query: `
              {
                allMarkdownRemark(
                  filter: { fields: { type: { eq: "blog" } } }
                  sort: { fields: [frontmatter___date], order: DESC }
                  limit: 1000
                ) {
                  edges {
                    node {
                      excerpt(truncate: true)
                      html
                      fields { 
                        slug
                        type
                      }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title,
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/themes/typography',
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify', // need to be the last
  ],
};
