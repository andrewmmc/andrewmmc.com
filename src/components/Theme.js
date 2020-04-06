import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import { ThemeProvider } from 'styled-components';

import lightTheme from 'themes/light';
import darkTheme from 'themes/dark';

const Theme = ({ children, ...props }) => {
  const [isDarkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme} {...props}>
      {children}
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: node.isRequired,
};

export default Theme;
