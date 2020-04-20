import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';

import { MAX_WIDTH } from 'utils/helpers';

const headerItems = [
  { path: '/projects', label: 'Projects' },
  { path: '/about', label: 'About' },
];

const Header = props => {
  const data = useStaticQuery(pageQuery);
  const { title } = data.site.siteMetadata;

  return (
    <Container {...props}>
      <h1>
        <Link to="/">{title}</Link>
      </h1>
      <Nav>
        <a href="https://medium.com/andrewmmc-io" target="_blank">
          Blog
        </a>
        {headerItems.map(item => (
          <Link key={item.path} to={item.path}>
            {item.label}
          </Link>
        ))}
      </Nav>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${MAX_WIDTH}rem;
  padding: 1rem;
  margin: 0 auto;

  h1 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }

  a {
    color: ${({ theme }) => rgba(theme.colors.primaryText, 0.8)};
    border-bottom: 0;

    &:hover,
    &:focus,
    &:active {
      color: ${({ theme }) => rgba(theme.colors.primaryText, 0.9)};
      background: none;
      border-bottom: none;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  position: initial;
  width: auto;
  justify-content: flex-end;

  a {
    display: inline-block;
    height: 100%;
    padding: 0 1rem;

    &:hover,
    &:focus,
    &:active {
      background-color: transparent;
    }
  }
`;

export default Header;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
