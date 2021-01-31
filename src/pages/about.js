import React from 'react';
import { shape } from 'prop-types';
import { graphql, Link as GatsbyLink } from 'gatsby';
import { Icon, Link, Divider } from '@chakra-ui/core';
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
      <Article
        title={title.text}
        content={<Content my={8} html={content.html} />}
      />
      <Divider borderColor="gray.300" mt={8} mb={6} />
      <Link as={GatsbyLink} to="/" color="primary.500">
        <Icon name="chevron-left" ml="1" />
        Back Home
      </Link>
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
