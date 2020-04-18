/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from 'components/Layout';
import Seo from 'components/Seo';
import Thumbnail from 'components/Thumbnail';

const About = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout
      cover={<Thumbnail fluid={data.featuredImage.childImageSharp.fluid} />}
    >
      <Seo title={post.frontmatter.title} description={post.excerpt} />
      <Main>
        <h1>About Me</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<div id="917526292"><script type="text/javascript">try {window._mNHandle.queue.push(function (){window._mNDetails.loadTag("917526292", "300x250", "917526292");});}catch (error) {}</script></div>',
          }}
        />
      </Main>
    </Layout>
  );
};

About.propTypes = {
  data: shape({}).isRequired,
};

const Main = styled.div`
  margin: 2rem 0;
`;

export default About;

export const pageQuery = graphql`
  query {
    featuredImage: file(relativePath: { eq: "assets/about.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    markdownRemark(fields: { slug: { eq: "/about/" } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
      }
    }
  }
`;
/* eslint-enable react/no-danger */
