exports.createPages = async ({ graphql, actions }) => {
  // redirect all old posts to new url (medium or github)
  const { createRedirect } = actions;
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
  blogPosts.forEach((post) => {
    const { url, data } = post.node;
    const { date, redirect_url: redirectUrl } = data;
    const year = date ? date.substring(0, 4) : undefined;
    if (year && redirectUrl && redirectUrl.url) {
      createRedirect({
        fromPath: `/blog/${year}/${url}`,
        toPath: redirectUrl.url,
        isPermanent: true,
      });
    }
  });

  const notePosts = notesResults.data.allPrismicNotePost.edges;
  notePosts.forEach((post) => {
    const { url, data } = post.node;
    const { date, redirect_url: redirectUrl } = data;
    const year = date ? date.substring(0, 4) : undefined;
    if (year && redirectUrl && redirectUrl.url) {
      createRedirect({
        fromPath: `/notes/${year}/${url}`,
        toPath: redirectUrl.url,
        isPermanent: true,
      });
    }
  });

  const projectPosts = projectsResults.data.allPrismicProjectPost.edges;
  projectPosts.forEach((post) => {
    const { url, data } = post.node;
    const { date, redirect_url: redirectUrl } = data;
    const year = date ? date.substring(0, 4) : undefined;
    if (year && redirectUrl && redirectUrl.url) {
      createRedirect({
        fromPath: `/projects/${year}/${url}`,
        toPath: redirectUrl.url,
        isPermanent: true,
      });
    }
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
        url
        data {
          redirect_url {
            url
          }
          date
        }
      }
    }
  }
}
`;

const notesQuery = `{
  allPrismicNotePost(sort: {order: DESC, fields: data___date}) {
    edges {
      node {
        url
        data {
          redirect_url {
            url
          }
          date
        }
      }
    }
  }
}
`;

const projectsQuery = `{
  allPrismicProjectPost(sort: {order: DESC, fields: data___date}) {
    edges {
      node {
        url
        data {
          redirect_url {
            url
          }
          date
        }
      }
    }
  }
}
`;
