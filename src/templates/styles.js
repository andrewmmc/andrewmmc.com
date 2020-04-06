import styled, { createGlobalStyle } from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import lighten from 'polished/lib/color/lighten';
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
    background-color: ${({ theme }) => rgba(theme.colors.gold, 0.3)};
  }

  a {
    color: ${({ theme }) => theme.colors.gold};
    text-decoration: none;
    border-radius: 0.25rem;
    border-bottom: 2px solid ${({ theme }) => lighten(0.4, theme.colors.gold)};
    transition: all 250ms;

    &:hover,
    &:focus, 
    &:active {
      color: ${({ theme }) => darken(0.1, theme.colors.gold)};
      background-color: ${({ theme }) => lighten(0.4, theme.colors.gold)};
      text-decoration: none;
      border-bottom: 2px solid ${({ theme }) => darken(0.1, theme.colors.gold)};
    }

    &:focus {
      /* box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6); */
    }
  }
  
  blockquote {
    border-left: 4px solid ${({ theme }) => rgba(theme.colors.primaryText, 0.5)};
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
  
  p {
    span.gatsby-resp-image-wrapper {
      margin: 2rem;
      box-shadow: 0 0.8em 2em ${({ theme }) => rgba(theme.colors.primaryText, 0.05)};
    }
  }
`;
