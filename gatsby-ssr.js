/* eslint-disable react/prop-types, import/prefer-default-export */
import React from 'react';

import Footer from './src/components/Footer';
import { GlobalStyle } from './src/components/Layout';

export const wrapPageElement = ({ element }) => {
  return (
    <>
      {element}
      <Footer />
    </>
  );
};

export const wrapRootElement = ({ element, props }) => {
  return <GlobalStyle {...props}>{element}</GlobalStyle>;
};
