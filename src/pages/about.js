import React from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';
import Content from 'components/Content';
import Layout from 'components/Layout';
import Seo from 'components/Seo';
import Article from 'components/Article';
import { ellipsis } from 'utils/index';

const About = ({ data }) => {
  const { content, title } = data.prismicAbout.data;

  return (
    <Layout>
      <Seo title={title.text} description={ellipsis(content.text)} />
      <Article title={title.text} content={<Content html={content.html} />} />
    </Layout>
  );
};

About.propTypes = {
  data: shape({}).isRequired,
};

export default About;

export const pageQuery = graphql`
  query {
    prismicAbout(uid: { eq: "about" }) {
      data {
        content {
          html
          text
        }
        title {
          text
        }
      }
    }
  }
`;
