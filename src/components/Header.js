import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
// import Image from 'gatsby-image';

// import { rhythm } from '../utils/typography';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 940px;
  padding: 2em;
  margin: 0 auto;
  
  h1 {
    margin-bottom: 0;
    font-size: 1.2em;
  }
  
  a {
    color: rgba(0, 0, 0, 0.8);
  }
  
  & nav a {
    margin-left: 1.2em;
    font-size: 1em;
  }
`;

const Header = () => (
  <StaticQuery
    query={headerQuery}
    render={(data) => {
      const { title } = data.site.siteMetadata;
      return (
        <Container>
          <h1><Link to="/">{title}</Link></h1>
          <nav>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/contact">GitHub</Link>
          </nav>
        </Container>
      );
    }}
  />
);

const headerQuery = graphql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Header;
