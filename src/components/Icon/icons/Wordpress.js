import React from 'react';
import { string } from 'prop-types';

const Wordpress = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M30 6C16.7 6 6 16.7 6 30s10.7 24 24 24 24-10.7 24-24S43.3 6 30 6zm18.2 15.7v.6c0 2.1-.4 4.4-1.6 7.4l-6 17.3c-1.3.8-2.6 1.5-4.1 2l-6.2-17.1-6 17.4c-1.3-.4-2.5-.9-3.7-1.5l-9.2-25.3c.5-1.3 1.2-2.6 2-3.7h.6c2.2 0 5.5-.3 5.5-.3 1.1-.1 1.2 1.6.1 1.7 0 0-1.1.1-2.4.2l7.5 22.3 4.5-13.5-3.2-8.8-2.2-.2c-1.1-.1-1-1.8.1-1.7 0 0 3.4.3 5.4.3 2.2 0 5.5-.3 5.5-.3 1.1-.1 1.2 1.6.1 1.7 0 0-1.1.1-2.4.2l7.4 22.1 2.1-6.9c1-2.7 1.6-4.9 1.6-6.7 0-2.5-.9-4.3-1.7-5.7-1-1.7-2-3.1-2-4.8s1.2-3.3 2.9-3.6c2.4 1.9 4.2 4.3 5.4 6.9z" />
  </svg>
);

Wordpress.propTypes = {
  title: string,
};

Wordpress.defaultProps = {
  title: null,
};

export default Wordpress;
