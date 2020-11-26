/* eslint-disable camelcase */
import React, { Fragment } from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';

import Content from 'components/Content';
import Feedback from 'components/Feedback';
import Layout from 'components/Layout';
import Seo from 'components/Seo';
import PostTemplate from 'components/PostTemplate';

const Blog = ({ data, pageContext }) => {
  const { siteUrl } = data.site.siteMetadata;
  const { url, tags } = data.prismicBlogPost;
  const blogPost = data.prismicBlogPost.data;
  const { previous, next } = pageContext;
  const { title, date, body } = blogPost;

  const content = body.map(({ __typename, id, items }) => {
    switch (__typename) {
      case 'PrismicBlogPostBodyContent': {
        return items.map(({ rich_text_content, rich_text_title }, index) => {
          return (
            <Fragment
              // eslint-disable-next-line react/no-array-index-key
              key={`${id}_PrismicBlogPostBodyContent_${index}`}
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
      case 'PrismicBlogPostBodyCode': {
        // eslint-disable-next-line no-unused-vars
        return items.map(({ code, file_name, language }, index) => {
          return code && code.text ? (
            <Content
              html={code.html}
              // eslint-disable-next-line react/no-array-index-key
              key={`${id}_PrismicBlogPostBodyCode_${index}`}
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
        feedback={<Feedback siteUrl={siteUrl} url={url} />}
        previous={previous}
        next={next}
      />
    </Layout>
  );
};

Blog.propTypes = {
  data: shape({}).isRequired,
  pageContext: shape({}).isRequired,
};

export default Blog;

export const pageQuery = graphql`
  query PostById($id: String!, $dateFormat: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    prismicBlogPost(id: { eq: $id }) {
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
          ... on PrismicBlogPostBodyCode {
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
          ... on PrismicBlogPostBodyContent {
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
