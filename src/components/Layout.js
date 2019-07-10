import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

import { MAX_WIDTH } from 'utils/helpers';
import { GlobalStyle } from 'utils/typography';

import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  width: 100%;
  max-width: ${MAX_WIDTH}rem;
  padding: 0 1rem;
  margin: 0 auto;
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
