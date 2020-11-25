// const path = require('path');
// const { createFilePath } = require('gatsby-source-filesystem');
// const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const postTemplate = require.resolve('./src/templates/post.js');

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
      component: postTemplate,
      context: {
        id,
        previous,
        next,
        isShowFeedback: true,
        dateFormat: 'MMMM DD, YYYY',
      },
    });
  });

  // const notesPosts = notesResults.data.allMarkdownRemark.edges;
  // notesPosts.forEach((post, index) => {
  //   const { id, url } = post.node;
  //   const previous =
  //     index === notesPosts.length - 1 ? null : notesPosts[index + 1].node;
  //   const next = index === 0 ? null : notesPosts[index - 1].node;
  //   createPage({
  //     path: url,
  //     component: postTemplate,
  //     context: {
  //       id,
  //       previous,
  //       next,
  //       isShowFeedback: false,
  //       dateFormat: 'MMMM DD, YYYY',
  //     },
  //   });
  // });

  // const projectPosts = projectsResults.data.allMarkdownRemark.edges;
  // projectPosts.forEach((post, index) => {
  //   const { id, url } = post.node;
  //   const previous =
  //     index === projectPosts.length - 1 ? null : projectPosts[index + 1].node;
  //   const next = index === 0 ? null : projectPosts[index - 1].node;
  //   createPage({
  //     path: url,
  //     component: postTemplate,
  //     context: {
  //       id,
  //       previous,
  //       next,
  //       isShowFeedback: false,
  //       dateFormat: 'YYYY',
  //     },
  //   });
  // });

  return true;
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type ThemeConfig implements Node {
      siteName: String
      likeCoinId: String
      mapId: String
    }

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
      author: String
      authorDescription: String
      description: String
      siteUrl: String
      seoKeywords: [String]
      location: String
      email: String
      social: Social
    }

    type MarkdownRemarkFrontmatter implements Node {
      title: String
      featuredImage: File @fileByRelativePath
      category: [String]
      description: String
      canonical: String
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
