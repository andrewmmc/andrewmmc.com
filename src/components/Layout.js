import React, { Component, Fragment } from 'react';
import { node } from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

import { MAX_WIDTH } from 'utils/helpers';
import { GlobalStyle } from 'templates/styles';
import lightTheme from 'themes/light';
import darkTheme from 'themes/dark';

import Header from './Header';

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

class Layout extends Component {
  state = {
    isDarkMode: false,
  };

  componentDidMount() {
    if (typeof window !== 'undefined' && window.matchMedia) {
      this.setState({ isDarkMode: window.matchMedia('(prefers-color-scheme: dark)').matches });
    }
  }

  render() {
    const { cover, children, ...props } = this.props;
    const { isDarkMode } = this.state;
    return (
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Fragment>
          <GlobalStyle />
          <Container>
            <Header />
            {cover}
            <Main {...props}>
              {children}
            </Main>
          </Container>
        </Fragment>
      </ThemeProvider>
    );
  }
}

Layout.defaultProps = {
  cover: null,
};

Layout.propTypes = {
  cover: node,
  children: node.isRequired,
};

export default Layout;
