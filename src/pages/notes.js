import React from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';

import Heading from 'components/Heading';
import Layout from 'components/Layout';
import Seo from 'components/Seo';
import PostList from 'components/postList';

const Notes = ({ data }) => {
  const posts = data.allPrismicNotePost.edges;
  const categories = data.allPrismicNotePost.group || [];

  return (
    <Layout>
      <Seo title="Notes" />
      <Heading>Notes</Heading>
      <PostList
        posts={posts}
        postCategories={categories}
        searchPlaceholder="Search notes"
        notFoundText="No notes found."
      />
    </Layout>
  );
};

Notes.propTypes = {
  data: shape({}).isRequired,
};

export default Notes;

export const pageQuery = graphql`
  query {
    allPrismicNotePost(sort: { order: DESC, fields: data___date }) {
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
      group(field: tags) {
        fieldValue
      }
    }
  }
`;
