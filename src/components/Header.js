import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';

// 1 rhythm ~= 26px
const Container = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${rhythm(34)};
  padding: ${rhythm(0.75)} ${rhythm(1.5)};
  margin: 0 auto;
     
  h1 {
    margin-bottom: 0;
    font-size: 1.2em;
    font-weight: 500;
  }
  
  a {
    color: rgba(0, 0, 0, 0.8);
    vertical-align: -webkit-baseline-middle; // TODO: Chrome only, need fix
    
    &:hover,
    &:focus, 
    &:active {
      color: rgba(0, 0, 0, 0.9);
    }
  }
  
  & nav a {
    margin-left: 2em;
    font-size: 0.9em;
  }
`;

const menu = [
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

const Header = props => (
  <StaticQuery
    query={headerQuery}
    render={(data) => {
      const { title } = data.site.siteMetadata;
      return (
        <Container {...props}>
          <h1><Link to="/">{title}</Link></h1>
          <nav>
            {menu.map(item => <Link to={item.path}>{item.label.toLowerCase()}</Link>)}
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
