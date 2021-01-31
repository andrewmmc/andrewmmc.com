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
