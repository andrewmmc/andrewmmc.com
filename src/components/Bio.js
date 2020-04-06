import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

const Bio = props => {
  const data = useStaticQuery(pageQuery);
  const { author, location, social } = data.site.siteMetadata;
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
        I'm <strong>{author}</strong>, a software developer based in {location}. <br />
        I enjoy working on <a href={`https://github.com/${social.github}`} target="_blank" rel="noopener noreferrer">modern web develpoment</a>, and <Link to="/about">everything related</Link>.
      </p>
    </Container>
  );
};

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

const pageQuery = graphql`
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
