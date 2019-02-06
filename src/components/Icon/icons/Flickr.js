import React from 'react';
import { string } from 'prop-types';

const Flickr = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M47.3 8H12.7C10.1 8 8 10.1 8 12.7v34.6c0 2.6 2.1 4.7 4.7 4.7h34.6c2.6 0 4.7-2.1 4.7-4.7V12.7c0-2.6-2.1-4.7-4.7-4.7zM22.2 36.2c-3.4 0-6.2-2.8-6.2-6.2s2.8-6.2 6.2-6.2 6.2 2.8 6.2 6.2-2.8 6.2-6.2 6.2zm15.6 0c-3.4 0-6.2-2.8-6.2-6.2s2.8-6.2 6.2-6.2S44 26.6 44 30s-2.7 6.2-6.2 6.2z" />
  </svg>
);

Flickr.propTypes = {
  title: string,
};

Flickr.defaultProps = {
  title: null,
};

export default Flickr;
