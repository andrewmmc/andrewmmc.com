import Typography from 'typography';
import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';
import { primary } from './color';

// https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-github/src/index.js
const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Inter UI', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Inter UI', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
  overrideStyles: ({ rhythm }) => ({
    blockquote: {
      borderLeft: '4px solid rgba(0, 0, 0, 0.1)',
      color: 'rgba(0, 0, 0, 0.4)',
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
`;
