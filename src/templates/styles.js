import styled, { createGlobalStyle } from 'styled-components';
import media from 'styled-media-query';
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
    background-color: ${({ theme }) => rgba(theme.colors.primary, 0.4)};
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    border-bottom: 2px solid ${({ theme }) => rgba(theme.colors.primary, 0.4)};
    transition: all 250ms;

    &:hover,
    &:focus, 
    &:active {
      color: ${({ theme }) => darken(0.1, theme.colors.primary)};
      background-color: ${({ theme }) => rgba(theme.colors.primary, 0.15)};
      text-decoration: none;
      border-bottom: 2px solid ${({ theme }) =>
        darken(0.1, theme.colors.primary)};
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
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  margin: 0;

  time {
    margin-right: 1rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 0.5rem;

  ${Info} {
    margin-bottom: 0.5rem;
  }

  ${media.greaterThan('medium')`
  flex-direction: row;

  ${Info} {
    margin-bottom: 0;
  }
`};
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
