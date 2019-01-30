/* global __PATH_PREFIX__ */
import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import Header from './Header';
import { GlobalStyle, rhythm, scale } from '../utils/typography';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    // location.pathname === rootPath

    return (
      <Fragment>
        <GlobalStyle />
        <Header />
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          {children}
          <footer>
            ©
            {' '}
            {new Date().getFullYear()}
, Built with
            {' '}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </Fragment>
    );
  }
}

export default Layout;
