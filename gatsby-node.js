const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  const blogTemplate = path.resolve('./src/templates/blog.js');
  const projectsTemplate = path.resolve('./src/templates/projects.js');

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
  blogPosts.forEach((post, index) => {
    const { slug } = post.node.fields;
    const previous =
      index === blogPosts.length - 1 ? null : blogPosts[index + 1].node;
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

  // Create projects pages
  const projectsResults = await graphql(projectsQuery);

  if (projectsResults.errors) {
    throw projectsResults.errors;
  }

  const projectsPosts = projectsResults.data.allMarkdownRemark.edges;
  projectsPosts.forEach((post, index) => {
    const { slug } = post.node.fields;
    const previous =
      index === projectsPosts.length - 1 ? null : projectsPosts[index + 1].node;
    const next = index === 0 ? null : projectsPosts[index - 1].node;
    createPage({
      path: slug,
      component: projectsTemplate,
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

const projectsQuery = `
  {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "projects" } } }
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
