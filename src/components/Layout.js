import React, { useState, useEffect } from 'react';
import { node } from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { MAX_WIDTH } from 'utils/helpers';
import { GlobalStyle } from 'templates/styles';
import lightTheme from 'themes/light';
import darkTheme from 'themes/dark';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ cover, children, ...props }) => {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
    <>
      <GlobalStyle />
      <Container>
        <Header />
        {cover}
        <Main {...props}>
          {children}
        </Main>
        <Footer />
      </Container>
    </>
  </ThemeProvider>
  );
}

Layout.defaultProps = {
  cover: null,
};

Layout.propTypes = {
  cover: node,
  children: node.isRequired,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 0 2rem 0;
`;

const Main = styled.main`
  width: 100%;
  max-width: ${MAX_WIDTH}rem;
  padding: 0 1rem;
  margin: 0 auto;
`;

export default Layout;
