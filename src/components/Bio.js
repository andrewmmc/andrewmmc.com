import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

import { rhythm } from 'utils/typography';

const Container = styled.div`
  display: flex;
  align-items: center;
  
  p {
    margin: 0;
  }
`;

const StyledImage = styled(Image)`
  margin-right: ${rhythm(0.5)};
  margin-bottom: 0;
  min-width: 50px;
  border-radius: 100%;
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
            <strong>{author}</strong>
              , a web developer from
            {' '}
            {location}
.  I write and I code.
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
