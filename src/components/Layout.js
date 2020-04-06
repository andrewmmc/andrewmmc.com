import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

import { MAX_WIDTH } from 'utils/helpers';
import { GlobalStyle } from 'templates/styles';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ cover, children, ...props }) => (
  <>
    <GlobalStyle />
    <Container>
      <Header />
      {cover}
      <Main {...props}>{children}</Main>
      <Footer />
    </Container>
  </>
);

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
