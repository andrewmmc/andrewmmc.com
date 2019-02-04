const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  const blog = path.resolve('./src/templates/blog.js');

  // redirect /blog to home page
  createRedirect({
    fromPath: '/blog', toPath: '/', isPermanent: true, redirectInBrowser: true,
  });

  // Create blog pages
  const blogResults = await graphql(blogQuery);

  if (blogResults.errors) {
    throw blogResults.errors;
  }

  const blogPosts = blogResults.data.allMarkdownRemark.edges;
  blogPosts.forEach((post, index) => {
    const { slug } = post.node.fields;
    const previous = index === blogPosts.length - 1 ? null : blogPosts[index + 1].node;
    const next = index === 0 ? null : blogPosts[index - 1].node;
    createPage({
      path: slug,
      component: blog,
      context: {
        slug,
        previous,
        next,
      },
    });
  });

  return blogPosts;
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
          }
        }
      }
    }
  }
`;
