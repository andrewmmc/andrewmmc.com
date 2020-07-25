import React from 'react';
import { CacheProvider } from '@emotion/core';
import createCache from '@emotion/cache';
import weakMemoize from '@emotion/weak-memoize';

import { GlobalStyle } from 'gatsby-theme-minimalism/src/components/Layout';

const memoizedCreateCacheWithContainer = weakMemoize((container) => {
  let newCache = createCache({ container });
  return newCache;
});

export default (Component) => (props) => {
  const iframe = document.querySelector('#nc-root iframe');
  const iframeHeadElem = iframe && iframe.contentDocument.head;

  if (!iframeHeadElem) {
    return null;
  }

  return (
    <GlobalStyle>
      <CacheProvider value={memoizedCreateCacheWithContainer(iframeHeadElem)}>
        <Component {...props} />
      </CacheProvider>
    </GlobalStyle>
  );
};
