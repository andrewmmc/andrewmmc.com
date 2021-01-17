import React from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';

import Bio from 'components/Bio';
import Layout from 'components/Layout';
import Seo from 'components/Seo';
import PostList from 'components/PostList';

const Index = ({ data }) => {
  const posts = data.allPrismicBlogPost.edges;
  return (
    <Layout>
      <Seo />
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
    allPrismicBlogPost(sort: { order: DESC, fields: data___date }) {
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
  }
`;
