/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

import Layout from 'components/Layout';
import Seo from 'components/Seo';
import Thumbnail from 'components/Thumbnail';

const About = ({ data }) => {
  const post = data.markdownRemark;
  const { author } = data.site.siteMetadata;
  return (
    <Layout cover={<Thumbnail fluid={data.featuredImage.childImageSharp.fluid} />}>
      <Seo title={post.frontmatter.title} description={post.excerpt} />
      <Main>
        <Author>
          <StyledImage fixed={data.avatar.childImageSharp.fixed} alt={author} />
          <h1>{author}</h1>
        </Author>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Main>
    </Layout>
  );
};

About.propTypes = {
  data: shape({}).isRequired,
};

const Author = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  h1 {
    margin-bottom: 0;
  }
`;

const Main = styled.div`
  margin: 2rem 0;
`;

const StyledImage = styled(Image)`
  min-width: 50px;
  margin-right: 1rem;
  border-radius: 100%;
`;

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