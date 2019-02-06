import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import { GlobalStyle, rhythm } from 'utils/typography';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  margin: ${rhythm(1)} auto;
  padding: 0 ${rhythm(1.5)};
  flex: 1;
  width: 100%;
  max-width: ${rhythm(34)};
`;

// const rootPath = `${__PATH_PREFIX__}/`;
// location.pathname === rootPath

const Layout = ({ cover, children, ...props }) => (
  <Container>
    <GlobalStyle />
    <Header />
    {cover}
    <Main {...props}>
      {children}
    </Main>
    <Footer />
  </Container>
);

Layout.defaultProps = {
  cover: null,
};

Layout.propTypes = {
  cover: node,
  children: node.isRequired,
};

export default Layout;
