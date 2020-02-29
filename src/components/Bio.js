import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;

  p {
    margin: 0;
  }
`;

const StyledImage = styled(Image)`
  min-width: 50px;
  border-radius: 100%;
  margin-right: 1rem;
  margin-bottom: 0;
`;

const Bio = props => (
  <StaticQuery
    query={bioQuery}
    render={(data) => {
      const { author, location } = data.site.siteMetadata;
      return (
        <Container {...props}>
          <StyledImage
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            imgStyle={{
              borderRadius: '50%',
            }}
          />
          <p>
            I'm <strong>{author}</strong>, a developer raised in {location}. <br />
            I enjoy working on <a href="https://github.com/andrewmmc" target="_blank" rel="noopener noreferrer">modern web develpoment</a>, and <Link to="/about">everything related</Link> :)
          </p>
        </Container>
      );
    }}
  />
);

const bioQuery = graphql`
  query BioQuery {
    avatar: file(relativePath: { eq: "assets/profile.jpg" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        location
        social {
          github
        }
      }
    }
  }
`;

export default Bio;
