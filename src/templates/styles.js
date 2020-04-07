import styled, { createGlobalStyle } from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import darken from 'polished/lib/color/darken';
import { rhythm } from 'themes/typography';

export const GlobalStyle = createGlobalStyle`
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => rgba(theme.colors.primaryText, 0.8)};
  }
  
  ::selection {
    background-color: ${({ theme }) => rgba(theme.colors.gold, 0.4)};
  }

  a {
    color: ${({ theme }) => theme.colors.gold};
    text-decoration: none;
    border-bottom: 2px solid ${({ theme }) => rgba(theme.colors.gold, 0.4)};
    transition: all 250ms;

    &:hover,
    &:focus, 
    &:active {
      color: ${({ theme }) => darken(0.1, theme.colors.gold)};
      background-color: ${({ theme }) => rgba(theme.colors.gold, 0.15)};
      text-decoration: none;
      border-bottom: 2px solid ${({ theme }) => darken(0.1, theme.colors.gold)};
    }
  }
  
  blockquote {
    border-left: 4px solid ${({ theme }) =>
      rgba(theme.colors.primaryText, 0.5)};
    color: ${({ theme }) => rgba(theme.colors.primaryText, 0.5)};
  }
  
  code {
    background-color: ${({ theme }) => theme.colors.lightGray} !important;
    color: ${({ theme }) => theme.colors.primaryText} !important;
  }

  figcaption.gatsby-resp-image-figcaption {
    text-align: center;
    font-size: 85%;
    margin: 4px 0;
  }

  /* PrismJS tweaks and line numbers */
  p+div.gatsby-highlight, ol+div.gatsby-highlight, ul+div.gatsby-highlight {
    margin-bottom: ${rhythm(1)};
  }
  
  .gatsby-highlight {
    background-color: ${({ theme }) => theme.colors.lightGray};
    padding: 1em;
    overflow: auto;
    border-radius: 0.25rem;
  }
  
  .gatsby-highlight pre[class*="language-"] {
    background-color: ${({ theme }) => theme.colors.lightGray};
    padding: 0;
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding-left: 2.5em;
    overflow: scroll;
  }
  
  code[class*="language-"] {
    text-shadow: none !important;
  }

  .gatsby-highlight .token {
    background: none;
  }
`;

export const Info = styled.p`
  color: ${({ theme }) => theme.colors.gold};
  display: flex;
  margin: 1rem 0;

  time {
    margin-right: 1rem;
  }
`;

export const Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

export const Article = styled.article`
  margin: 2rem 0;
`;

export const Content = styled.div`
  margin: 1rem 0;

  span.gatsby-resp-image-wrapper {
    margin: 1rem auto;
    box-shadow: 0 0.8em 2em
      ${({ theme }) => rgba(theme.colors.primaryText, 0.15)};
  }
`;
