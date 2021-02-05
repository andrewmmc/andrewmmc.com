exports.createPages = async ({ graphql, actions }) => {
  // redirect all old posts to new url (medium or github)
  const { createRedirect } = actions;
  const [
    blogResults,
    notesResults,
    projectsResults,
    bioResults,
  ] = await Promise.all([
    graphql(blogQuery),
    graphql(notesQuery),
    graphql(projectsQuery),
    graphql(bioQuery),
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

  if (bioResults.errors) {
    throw bioResults.errors;
  }

  const bio = bioResults.data.prismicSettings.data;

  if (bio && bio.mediumId && bio.mediumId.text) {
    createRedirect({
      fromPath: `/blog`,
      toPath: `https://medium.com/${bio.mediumId.text}`,
      isPermanent: true,
    });

    createRedirect({
      fromPath: `/rss.xml`,
      toPath: `https://medium.com/feed/${bio.mediumId.text}`,
      isPermanent: true,
    });
  }

  const blogPosts = blogResults.data.allPrismicBlogPost.edges;
  blogPosts.forEach((post) => {
    const { url, data } = post.node;
    const { date, redirectUrl } = data;
    const year = date ? date.substring(0, 4) : undefined;
    if (year && redirectUrl && redirectUrl.url) {
      createRedirect({
        fromPath: `/blog/${year}/${url}`,
        toPath: redirectUrl.url,
        isPermanent: true,
      });
    }
  });

  if (bio && bio.mediumId && bio.mediumId.text) {
    createRedirect({
      fromPath: `/notes`,
      toPath: `https://medium.com/${bio.mediumId.text}`,
      isPermanent: true,
    });
  }

  const notePosts = notesResults.data.allPrismicNotePost.edges;
  notePosts.forEach((post) => {
    const { url, data } = post.node;
    const { date, redirectUrl } = data;
    const year = date ? date.substring(0, 4) : undefined;
    if (year && redirectUrl && redirectUrl.url) {
      createRedirect({
        fromPath: `/notes/${year}/${url}`,
        toPath: redirectUrl.url,
        isPermanent: true,
      });
    }
  });

  if (bio && bio.githubId && bio.githubId.text) {
    createRedirect({
      fromPath: `/projects`,
      toPath: `https://github.com/${bio.githubId.text}`,
      isPermanent: true,
    });
  }

  const projectPosts = projectsResults.data.allPrismicProjectPost.edges;
  projectPosts.forEach((post) => {
    const { url, data } = post.node;
    const { date, redirectUrl } = data;
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
          redirectUrl: redirect_url {
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
          redirectUrl: redirect_url {
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
          redirectUrl: redirect_url {
            url
          }
          date
        }
      }
    }
  }
}
`;

const bioQuery = `{
  prismicSettings(uid: { eq: "settings" }) {
    data {
      githubId: github_id {
        text
      }
      mediumId: medium_id {
        text
      }
    }
  }
}
`;
