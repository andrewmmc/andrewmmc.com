exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = require.resolve('./src/templates/blog.js');
  const noteTemplate = require.resolve('./src/templates/note.js');
  const projectTemplate = require.resolve('./src/templates/project.js');

  const [blogResults, notesResults, projectsResults] = await Promise.all([
    graphql(blogQuery),
    graphql(notesQuery),
    graphql(projectsQuery),
  ]);

  if (blogResults.errors) {
    throw blogResults.errors;
  }

  if (notesResults.errors) {
    throw notesResults.errors;
  }

  if (projectsResults.errors) {
    throw projectsResults.errors;
  }

  const blogPosts = blogResults.data.allPrismicBlogPost.edges;
  blogPosts.forEach((post, index) => {
    const { id, url } = post.node;
    const previous =
      index === blogPosts.length - 1 ? null : blogPosts[index + 1].node;
    const next = index === 0 ? null : blogPosts[index - 1].node;
    createPage({
      path: url,
      component: blogTemplate,
      context: {
        id,
        previous,
        next,
        dateFormat: 'MMMM DD, YYYY',
      },
    });
  });

  const notePosts = notesResults.data.allPrismicNotePost.edges;
  notePosts.forEach((post, index) => {
    const { id, url } = post.node;
    const previous =
      index === notePosts.length - 1 ? null : notePosts[index + 1].node;
    const next = index === 0 ? null : notePosts[index - 1].node;
    createPage({
      path: url,
      component: noteTemplate,
      context: {
        id,
        previous,
        next,
        dateFormat: 'MMMM DD, YYYY',
      },
    });
  });

  const projectPosts = projectsResults.data.allPrismicProjectPost.edges;
  projectPosts.forEach((post, index) => {
    const { id, url } = post.node;
    const previous =
      index === projectPosts.length - 1 ? null : projectPosts[index + 1].node;
    const next = index === 0 ? null : projectPosts[index - 1].node;
    createPage({
      path: url,
      component: projectTemplate,
      context: {
        id,
        previous,
        next,
        dateFormat: 'YYYY',
      },
    });
  });

  return true;
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Social implements Node {
      github: String
      linkedin: String
      facebook: String
      instagram: String
      twitter: String
      medium: String
    }

    type SiteSiteMetadata implements Node {
      title: String
      description: String
      siteUrl: String
    }
  `;
  createTypes(typeDefs);
};

const blogQuery = `{
  allPrismicBlogPost(sort: {order: DESC, fields: data___date}) {
    edges {
      node {
        id
        url
        data {
          title {
            text
          }
        }
        tags
      }
    }
  }
}
`;

const notesQuery = `{
  allPrismicNotePost(sort: {order: DESC, fields: data___date}) {
    edges {
      node {
        id
        url
        data {
          title {
            text
          }
        }
        tags
      }
    }
  }
}
`;

const projectsQuery = `{
  allPrismicProjectPost(sort: {order: DESC, fields: data___date}) {
    edges {
      node {
        id
        url
        data {
          title {
            text
          }
        }
        tags
      }
    }
  }
}
`;
