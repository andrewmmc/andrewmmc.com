import React, { Component } from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import media from 'styled-media-query';
import { rgba } from 'polished';

import Icon from 'components/Icon';
import { lightGray, black } from 'utils/color';
import { rhythm } from 'utils/typography';

// 1 rhythm ~= 26px
const Container = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${rhythm(34)};
  padding: ${rhythm(0.75)} ${rhythm(0.6)};
  margin: 0 auto;
  line-height: 1.2em;
  vertical-align: bottom;
     
  h1 {
    margin-bottom: 0;
    font-size: 1.2em;
    font-weight: 500;
  }
  
  a {
    color: ${rgba(black, 0.8)};
    
    &:hover,
    &:focus, 
    &:active {
      color: ${rgba(black, 0.9)};
    }
  }
  
  & nav {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 10;
    margin-right: ${rhythm(0.6)};
    display: block;
    min-width: 12em;
    height: ${({ isOpen }) => (isOpen ? 'auto' : 0)};
    background-color: #fff;
    box-shadow: 0 0 2em ${rgba(black, 0.15)};
    overflow: hidden;
    transition: 0.5s;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  }
  
  & nav a {
    display: block;
    padding: ${rhythm(0.6)} ${rhythm(0.5)};
    font-size: 0.9em;
    &:hover,
    &:focus, 
    &:active {
      background-color: ${lightGray};
    }
  }
  
  ${media.greaterThan('small')`
    padding: ${rhythm(0.75)} ${rhythm(1.5)};
    
    & nav {
      position: initial;
      margin: 0;
      min-width: auto;
      height: auto;
      box-shadow: none;
      opacity: 1;
    }
    
    & nav a {
      display: inline-block;
      padding: 0;
      margin-left: 2em;
      
      &:hover, 
      &:focus, 
      &:active {
        background: none;
      }
    }
  `}
`;

const ToggleContainer = styled.div`
  ${media.greaterThan('small')`
    display: none;
  `};
`;

const menu = [
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
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
            <Container isOpen={isOpen} {...this.props}>
              <h1><Link to="/">{title}</Link></h1>
              <ToggleContainer onClick={this.toggleMenu}>
                <Icon type="menu" size={20} />
              </ToggleContainer>
              <nav>
                {menu.map(
                  item => <Link key={item.path} to={item.path}>{item.label.toLowerCase()}</Link>,
                )}
              </nav>
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
