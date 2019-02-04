import Typography from 'typography';
import { createGlobalStyle } from 'styled-components';
import { darken, rgba } from 'polished';

import { primary, black, lightGray } from './color';

// https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-github/src/index.js
const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Inter UI', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Inter UI', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  overrideStyles: ({ rhythm }) => ({
    blockquote: {
      borderLeft: `4px solid ${rgba(black, 0.1)}`,
      color: rgba(black, 0.4),
      marginTop: 0,
      marginRight: 0,
      marginLeft: 0,
      paddingLeft: rhythm(1),
    },
  }),
});

// Hot reload typography in development
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
export const { rhythm, scale } = typography;
export const GlobalStyle = createGlobalStyle`
  @import url('https://rsms.me/inter/inter-ui.css');
  
  a {
    color: ${primary};
    text-decoration: none;

    &:hover,
    &:focus, 
    &:active {
      color: ${darken(0.1, primary)};
      text-decoration: none;
    }
  }
  
  // PrismJS tweaks and line numbers
  p+div.gatsby-highlight, ol+div.gatsby-highlight, ul+div.gatsby-highlight {
    margin-bottom: ${rhythm(1)};
  }
  
  .gatsby-highlight {
    background-color: ${lightGray};
    padding: 1em;
    overflow: auto;
  }
  
  .gatsby-highlight pre[class*="language-"] {
    background-color: ${lightGray};
    padding: 0;
  }

  .gatsby-highlight pre[class*="language-"].line-numbers {
    padding-left: 2.5em;
    overflow: scroll;
  }
  
  code[class*="language-"] {
    text-shadow: none !important;
  }
`;
