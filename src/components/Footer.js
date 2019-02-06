import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { darken } from 'polished';

import { lightGray, gray } from 'utils/color';
import { rhythm, scale } from 'utils/typography';

const Container = styled.footer`
  ${scale(-1 / 8)};
  width: 100%;
  text-align: center;
  background-color: ${lightGray};
  
  ul {
    max-width: ${rhythm(34)};
    padding: ${rhythm(1)};
    margin: 0 auto;
    & li {
      display: inline-block;
      margin: 0 ${rhythm(1.5)};
      list-style: none;
    }
  }

  a {
    color: ${gray};

    &:hover,
    &:focus, 
    &:active {
      color: ${darken(0.1, gray)};
    }
  }
`;

// © {new Date().getFullYear()} Andrew Mok. All Rights Reserved.
const Footer = props => (
  <StaticQuery
    query={footerQuery}
    render={(data) => {
      const { social } = data.site.siteMetadata;
      return (
        <Container {...props}>
          <ul>
            <li><a href={`https://github.com/${social.github}`} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href={`https://linkedin.com/in/${social.linkedin}`} target="_blank" rel="noopener noreferrer">Linkedin</a></li>
            <li><a href={`https://medium.com/@${social.medium}`} target="_blank" rel="noopener noreferrer">Medium</a></li>
            <li><a href={`https://vsco.co/${social.vsco}`} target="_blank" rel="noopener noreferrer">Vsco</a></li>
          </ul>
        </Container>
      );
    }}
  />
);

const footerQuery = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        social {
          github
          linkedin
          medium
          vsco
        }
      }
    }
  }
`;

export default Footer;
