require('dotenv').config();
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
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `src/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'andrewmmc-com',
        accessToken: process.env.PRISMIC_TOKEN || '',
        // https://prismic.io/docs/javascript/query-the-api/link-resolving
        linkResolver: () => (doc) => {
          let year;
          const { data } = doc;
          if (data.date) year = data.date.substring(0, 4);
          if (doc.type === 'blog_post')
            return ['blog', year, doc.uid].filter(Boolean).join(`/`);
          if (doc.type === 'note_post')
            return ['notes', year, doc.uid].filter(Boolean).join(`/`);
          if (doc.type === 'project_post')
            return ['projects', year, doc.uid].filter(Boolean).join(`/`);
          return doc.uid;
        },
        schemas: {
          /* eslint-disable global-require */
          about: require('./src/schemas/about.json'),
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
            serialize: ({ query: { site, allPrismicBlogPost } }) => {
              return allPrismicBlogPost.edges.map((edge) => {
                return {
                  title: edge.node.data.title.text,
                  description: ``,
                  date: edge.node.data.date,
                  url: site.siteMetadata.siteUrl + '/' + edge.node.url,
                  guid: site.siteMetadata.siteUrl + '/' + edge.node.url,
                  custom_elements: [{ 'content:encoded': `` }],
                };
              });
            },
            query: `
            {
              allPrismicBlogPost(sort: { order: DESC, fields: data___date }) {
                edges {
                  node {
                    id
                    url
                    data {
                      title {
                        text
                      }
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
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify',
  ],
};
