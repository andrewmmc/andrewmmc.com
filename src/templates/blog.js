/* eslint-disable camelcase */
import React from 'react';
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
  const postData = data.prismicBlogPost.data;
  const { previous, next } = pageContext;
  const { content, title, date } = postData;

  return (
    <Layout>
      <Seo title={title.text} />
      <PostTemplate
        title={title.text}
        date={date}
        category={tags}
        content={<Content html={content.html} />}
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
        content {
          html
          text
        }
      }
    }
  }
`;
