import React from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';
import * as parse from 'rehype-parse';
import * as unified from 'unified';
import Content from 'components/Content';
import Heading from 'components/Heading';
import Layout from 'components/Layout';
import Seo from 'components/Seo';

const About = ({ data }) => {
  const { content, title } = data.prismicAbout.data;
  const process = unified().use(parse, { fragment: true });
  const htmlAst = process.parse(content.html);
  return (
    <Layout>
      <Seo
        title={title.text}
        description={`${content.text.substring(0, 100)}...`}
      />
      <Heading>{title.text}</Heading>
      <Content content={htmlAst} />
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
