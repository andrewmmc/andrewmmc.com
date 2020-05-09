import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

const Bio = props => {
  const data = useStaticQuery(pageQuery);
  const { author } = data.site.siteMetadata;
  return (
    <Container {...props}>
      <StyledImage fixed={data.avatar.childImageSharp.fixed} alt={author} />
      <Link to="/about">{author}</Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImage = styled(Image)`
  max-width: 25px;
  border-radius: 50%;
  margin: 0 0.5rem 0 0;
`;

const pageQuery = graphql`
  query BioQuery {
    avatar: file(relativePath: { eq: "assets/profile.jpg" }) {
      childImageSharp {
        fixed(width: 25, height: 25) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default Bio;
