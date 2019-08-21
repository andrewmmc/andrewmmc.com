import React, { Component } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import media from 'styled-media-query';
import { rgba } from 'polished';

import Icon from 'components/Icon';
import { MAX_WIDTH } from 'utils/helpers';

const Container = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${MAX_WIDTH}rem;
  padding: 1rem 1rem;
  margin: 0 auto;

  h1 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 500;
  }

  a {
    color: ${({ theme }) => rgba(theme.colors.primaryText, 0.8)};
    
    &:hover,
    &:focus, 
    &:active {
      outline: 0;
      color: ${({ theme }) => rgba(theme.colors.primaryText, 0.9)};
    }
  }

  ${media.greaterThan('small')`
    padding: 1.25rem 1rem;
  `}
`;

const ToggleContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  color: ${({ theme }) => rgba(theme.colors.primaryText, 0.8)};
  cursor: pointer;

  &:hover,
  &:focus, 
  &:active {
    outline: 0;
    color: ${({ theme }) => rgba(theme.colors.primaryText, 0.9)};
  }

  ${media.greaterThan('small')`
    display: none;
  `};
`;

const Nav = styled.nav`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  transition: 0.3s;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  
  a {
    display: block;
    width: 50%;
    padding: 1rem 1rem;
    &:hover,
    &:focus, 
    &:active {
      background-color: ${({ theme }) => theme.colors.lightGray};
    }
  }
  
  ${media.greaterThan('small')`
    position: initial;
    width: auto;
    justify-content: flex-end;
    background-color: transparent;
    opacity: 1;
    visibility: visible;

    a {
      display: inline-block;
      width: auto;
      padding: 0;
      margin-left: 2em;
      
      &:hover, 
      &:focus, 
      &:active {
        background-color: transparent;
      }
    }
  `};
`;

const menu = [
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/about', label: 'About' },
];

class Header extends Component {
  state = {
    isOpen: false,
  };

  toggleMenu = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { isOpen } = this.state;
    return (
      <StaticQuery
        query={headerQuery}
        render={(data) => {
          const { title } = data.site.siteMetadata;
          return (
            <Container {...this.props}>
              <h1><Link to="/">{title}</Link></h1>
              <ToggleContainer onClick={this.toggleMenu}>
                <Icon type="menu" size={20} />
              </ToggleContainer>
              <Nav isOpen={isOpen}>
                {menu.map(
                  item => <Link key={item.path} to={item.path}>{item.label.toLowerCase()}</Link>,
                )}
                <a href="https://github.com/andrewmmc" target="_blank" rel="noopener noreferrer">github</a>
              </Nav>
            </Container>
          );
        }}
      />
    );
  }
}

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
