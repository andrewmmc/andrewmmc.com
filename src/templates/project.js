import React from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';

import Content from 'components/Content';
import Layout from 'components/Layout';
import Seo from 'components/Seo';
import PostTemplate from 'components/PostTemplate';
import { ellipsis } from 'utils/index';

const Project = ({ data, pageContext }) => {
  const { tags } = data.prismicProjectPost;
  const projectPost = data.prismicProjectPost.data;
  const { previous, next } = pageContext;
  const { title, date, content } = projectPost;

  const body = <Content html={content.html} />;

  return (
    <Layout>
      <Seo title={title.text} description={ellipsis(content.text)} />
      <PostTemplate
        title={title.text}
        date={date}
        category={tags}
        content={body}
        previous={previous}
        next={next}
      />
    </Layout>
  );
};

Project.propTypes = {
  data: shape({}).isRequired,
  pageContext: shape({}).isRequired,
};

export default Project;

export const pageQuery = graphql`
  query ProjectById($id: String!, $dateFormat: String!) {
    prismicProjectPost(id: { eq: $id }) {
      id
      url
      tags
      data {
        title {
          text
        }
        content {
          html
          text
        }
        date(formatString: $dateFormat)
      }
    }
  }
`;
