const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
// const helper = require('./src/utils/helper');

// const { BLOG_TAGS_PATH, toKebabCase } = helper;

const BLOG_TAGS_PATH = '/blog/tags/';

const toKebabCase = str => str && str
  .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
  .map(x => x.toLowerCase())
  .join('-');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  const blogTemplate = path.resolve('./src/templates/blog/index.js');
  const tagTemplate = path.resolve('./src/templates/blog/tag.js');
  const portfolioTemplate = path.resolve('./src/templates/portfolio/index.js');

  // redirect /blog to home page
  createRedirect({
    fromPath: '/blog', toPath: '/', isPermanent: true, redirectInBrowser: true,
  });
  createRedirect({
    fromPath: '/blog/', toPath: '/', isPermanent: true, redirectInBrowser: true,
  });

  // Create blog pages
  const blogResults = await graphql(blogQuery);

  if (blogResults.errors) {
    throw blogResults.errors;
  }

  const blogPosts = blogResults.data.allMarkdownRemark.edges;
  let blogTags = [];
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

    if (post.node.frontmatter.tags) {
      post.node.frontmatter.tags.forEach((tag) => {
        blogTags.push(tag);
      });
    }
  });

  // redirect /tags to homepage
  createRedirect({
    fromPath: '/tags', toPath: '/', isPermanent: true, redirectInBrowser: true,
  });
  createRedirect({
    fromPath: '/tags/', toPath: '/', isPermanent: true, redirectInBrowser: true,
  });

  // create blog tag pages
  blogTags = [...new Set(blogTags)];
  blogTags.forEach((tag) => {
    createPage({
      path: `${BLOG_TAGS_PATH}${toKebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag,
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
    const previous = index === portfolioPosts.length - 1 ? null : portfolioPosts[index + 1].node;
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
            subtitle
            tags
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
