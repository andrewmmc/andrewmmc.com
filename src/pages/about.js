/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';

import Icon from 'components/Icon';
import Layout from 'components/Layout';
import Seo from 'components/Seo';
import Thumbnail from 'components/Thumbnail';

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

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  
  a {
    color: ${({ theme }) => rgba(theme.colors.primaryText, 0.8)};
    border-bottom: none;

    &:hover,
    &:focus, 
    &:active {
      color: ${({ theme }) => rgba(theme.colors.primaryText, 0.9)};
      background: none;
      border-bottom: none;
    }
  }
`;

const StyledImage = styled(Image)`
  min-width: 50px;
  margin-right: 1rem;
  border-radius: 100%;
`;

const About = ({ data }) => {
  const post = data.markdownRemark;
  const { author, social } = data.site.siteMetadata;
  const {
    github, linkedin, medium, vsco,
  } = social;
  return (
    <Layout cover={<Thumbnail fluid={data.featuredImage.childImageSharp.fluid} />}>
      <Seo title={post.frontmatter.title} description={post.excerpt} />
      <Main>
        <Author>
          <StyledImage fixed={data.avatar.childImageSharp.fixed} alt={author} />
          <h1>{author}</h1>
        </Author>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <SocialMedia>
          <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer">
            <Icon type="github" />
          </a>
          <a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noopener noreferrer">
            <Icon type="linkedin" />
          </a>
          <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer">
            <Icon type="medium" />
          </a>
          <a href={`https://vsco.co/${vsco}`} target="_blank" rel="noopener noreferrer">
            <Icon type="vsco" />
          </a>
        </SocialMedia>
      </Main>
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
                  ...GatsbyImageSharpFluid_withWebp
              }
          }
      }
      site {
          siteMetadata {
              author
              social {
                  github
                  linkedin
                  medium
                  vsco
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
