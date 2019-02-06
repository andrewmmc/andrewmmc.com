import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

import { GlobalStyle, rhythm } from 'utils/typography';

import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  max-width: ${rhythm(34)};
  padding: 0 ${rhythm(1.5)};
  margin: ${rhythm(1.5)} auto;
`;

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
