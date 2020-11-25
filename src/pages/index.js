import React from 'react';
import { shape } from 'prop-types';
import { Link as GatsbyLink, graphql } from 'gatsby';
import { Icon, Link } from '@chakra-ui/core';

import Bio from 'components/Bio';
import Heading from 'components/Heading';
import Layout from 'components/Layout';
import Seo from 'components/Seo';
import PostList from 'templates/postList';

const Index = ({ data }) => {
  const posts = data.allPrismicBlogPost.edges;
  return (
    <Layout>
      <Seo keywords={data.site.siteMetadata.seoKeywords} />
      <Bio mb={12} />
      <PostList
        posts={posts}
        showSearchFilter={false}
        showCategoryFilter={false}
      />
    </Layout>
  );
};

Index.propTypes = {
  data: shape({}).isRequired,
};

export default Index;

export const pageQuery = graphql`
  query {
    allPrismicBlogPost(sort: {order: DESC, fields: data___date}) {
      edges {
        node {
          id
          url
          data {
            title {
              text
            }
            date(formatString: "MMMM DD, YYYY")
          }
          tags
        }
      }
    }
    site {
      siteMetadata {
        seoKeywords
      }
    }
  }
`;
