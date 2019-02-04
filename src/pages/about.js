/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { rhythm } from '../utils/typography';

const CoverImage = styled(BackgroundImage).attrs({
  backgroundColor: '#eeeeee',
})`
  width: 100%;
  height: 350px;
  background-position: center;
  margin-bottom: ${rhythm(1)};
  
  &:before, &:after {
    background-position: center;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${rhythm(1)};
  h1 {
    margin-bottom: 0;
  }
`;

const StyledImage = styled(Image)`
  margin-right: ${rhythm(1 / 2)};
  min-width: 50px;
  border-radius: 100%;
`;

const About = ({ data }) => {
  const post = data.markdownRemark;
  const { author } = data.site.siteMetadata;
  return (
    <Layout cover={<CoverImage fluid={data.cover.childImageSharp.fluid} />}>
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
      cover: file(relativePath: { eq: "assets/about.jpg" }) {
          childImageSharp {
              fluid(quality: 100, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid_withWebp
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
