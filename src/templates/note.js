/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';

import Content from 'components/Content';
import Layout from 'components/Layout';
import Seo from 'components/Seo';
import PostTemplate from 'components/PostTemplate';

const Note = ({ data, pageContext }) => {
  const { tags } = data.prismicNotePost;
  const notePost = data.prismicNotePost.data;
  const { previous, next } = pageContext;
  const { title, date, body } = notePost;

  const content = body.map(({ __typename, id, items }) => {
    switch (__typename) {
      case 'PrismicNotePostBodyContent': {
        return items.map(({ rich_text_content, rich_text_title }, index) => {
          return (
            <Fragment
              // eslint-disable-next-line react/no-array-index-key
              key={`${id}_PrismicNotePostBodyContent_${index}`}
            >
              {rich_text_title && rich_text_title.text && (
                <Content html={rich_text_title.text} wrappedTag="h2" />
              )}
              {rich_text_content && rich_text_content.html && (
                <Content html={rich_text_content.html} />
              )}
            </Fragment>
          );
        });
      }
      case 'PrismicNotePostBodyCode': {
        // eslint-disable-next-line no-unused-vars
        return items.map(({ code, file_name, language }, index) => {
          return code && code.text ? (
            <Content
              html={code.html}
              // eslint-disable-next-line react/no-array-index-key
              key={`${id}_PrismicNotePostBodyCode_${index}`}
            />
          ) : null;
        });
      }
      default:
        return null;
    }
  });

  return (
    <Layout>
      <Seo title={title.text} />
      <PostTemplate
        title={title.text}
        date={date}
        category={tags}
        content={content}
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
        body {
          __typename
          ... on PrismicNotePostBodyCode {
            id
            items {
              code {
                text
                raw
                html
              }
              file_name {
                text
              }
              language {
                text
              }
            }
          }
          ... on PrismicNotePostBodyContent {
            id
            items {
              rich_text_content {
                html
              }
              rich_text_title {
                text
              }
            }
          }
        }
      }
    }
  }
`;
