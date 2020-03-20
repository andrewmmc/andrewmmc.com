const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  const blogTemplate = path.resolve('./src/templates/blog.js');
  const portfolioTemplate = path.resolve('./src/templates/portfolio.js');

  // redirect andrewmmc.netlify.com
  createRedirect({
    fromPath: 'https://andrewmmc.netlify.com/*',
    toPath: 'https://andrewmmc.com/:splat',
    isPermanent: true,
    force: true,
  });

  // redirect /blog to home page
  createRedirect({
    fromPath: '/blog',
    toPath: '/',
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  });
  createRedirect({
    fromPath: '/blog/',
    toPath: '/',
    isPermanent: true,
    redirectInBrowser: true,
    force: true,
  });

  // Create blog pages
  const blogResults = await graphql(blogQuery);

  if (blogResults.errors) {
    throw blogResults.errors;
  }

  const blogPosts = blogResults.data.allMarkdownRemark.edges;
  // let blogTags = [];
  blogPosts.forEach((post, index) => {
    const { slug } = post.node.fields;
    const previous = index === blogPosts.length - 1 ? null : blogPosts[index + 1].node;
    const next = index === 0 ? null : blogPosts[index - 1].node;
    createPage({
      path: slug,
      component: blogTemplate,
      context: {
        slug,
        previous,
        next,
      },
    });
  });

  // Create portfolio pages
  const portfolioResults = await graphql(portfolioQuery);

  if (portfolioResults.errors) {
    throw portfolioResults.errors;
  }

  const portfolioPosts = portfolioResults.data.allMarkdownRemark.edges;
  portfolioPosts.forEach((post, index) => {
    const { slug } = post.node.fields;
    const previous = index === portfolioPosts.length - 1
      ? null
      : portfolioPosts[index + 1].node;
    const next = index === 0 ? null : portfolioPosts[index - 1].node;
    createPage({
      path: slug,
      component: portfolioTemplate,
      context: {
        slug,
        previous,
        next,
      },
    });
  });

  return true;
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value: slug,
    });

    let type;
    const { dir, base } = path.parse(slug);
    if (dir === '/') {
      type = base;
    } else {
      [, type] = dir.split('/');
    }

    createNodeField({
      node,
      name: 'type',
      value: type,
    });
  }
};

const blogQuery = `
  {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
            type
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

const portfolioQuery = `
  {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "portfolio" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
            type
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
