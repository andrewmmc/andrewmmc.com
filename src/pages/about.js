/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

import Layout from 'components/Layout';
import Seo from 'components/Seo';
import Thumbnail from 'components/Thumbnail';

import { rhythm } from 'utils/typography';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${rhythm(1)};
  h1 {
    margin-bottom: 0;
  }
`;

const StyledImage = styled(Image)`
  min-width: 50px;
  margin-right: ${rhythm(0.5)};
  border-radius: 100%;
`;

const About = ({ data }) => {
  const post = data.markdownRemark;
  const { author } = data.site.siteMetadata;
  return (
    <Layout cover={<Thumbnail fluid={data.featuredImage.childImageSharp.fluid} />}>
      <Seo title={post.frontmatter.title} description={post.excerpt} />
      <Container>
        <StyledImage fixed={data.avatar.childImageSharp.fixed} alt={author} />
        <h1>{author}</h1>
      </Container>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  );
};

About.propTypes = {
  data: shape({}).isRequired,
};

export default About;

export const pageQuery = graphql`
  query {
      avatar: file(relativePath: { eq: "assets/profile.jpg" }) {
          childImageSharp {
              fixed(width: 50, height: 50) {
                  ...GatsbyImageSharpFixed
              }
          }
      }
      featuredImage: file(relativePath: { eq: "assets/about.jpg" }) {
          childImageSharp {
              fluid(quality: 90, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
              }
          }
      }
      site {
          siteMetadata {
              author
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
