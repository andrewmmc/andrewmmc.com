import React from 'react';
import { string } from 'prop-types';

const GooglePlay = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path
      d="M36 28.1l-19-19L41.1 23zM12 8c-1.1.6-1.9 1.7-1.9 3v38c0 1.4.7 2.4 1.9 3l22.1-22zm36.6 19.4l-5.1-2.9-5.6 5.5 5.6 5.5 5.2-2.9c1.5-1.2 1.5-4-.1-5.2zM17 50.9L41.1 37 36 31.9z"
    />
  </svg>
);

GooglePlay.propTypes = {
  title: string,
};

GooglePlay.defaultProps = {
  title: null,
};

export default GooglePlay;
