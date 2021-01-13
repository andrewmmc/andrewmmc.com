/* eslint-disable camelcase */
import React from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';

import Content from 'components/Content';
import Layout from 'components/Layout';
import Seo from 'components/Seo';
import PostTemplate from 'components/PostTemplate';

const Note = ({ data, pageContext }) => {
  const { tags } = data.prismicNotePost;
  const postData = data.prismicNotePost.data;
  const { previous, next } = pageContext;
  const { title, date, content } = postData;

  return (
    <Layout>
      <Seo title={title.text} />
      <PostTemplate
        title={title.text}
        date={date}
        category={tags}
        content={<Content html={content.html} />}
        previous={previous}
        next={next}
      />
    </Layout>
  );
};

Note.propTypes = {
  data: shape({}).isRequired,
  pageContext: shape({}).isRequired,
};

export default Note;

export const pageQuery = graphql`
  query NoteById($id: String!, $dateFormat: String!) {
    prismicNotePost(id: { eq: $id }) {
      id
      url
      tags
      data {
        title {
          text
        }
        date(formatString: $dateFormat)
        content {
          html
          text
        }
      }
    }
  }
`;
