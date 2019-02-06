import React from 'react';
import { string } from 'prop-types';

const Apple = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M42.4 31.3c0-3.6 1.6-6.3 4.9-8.3-1.8-2.6-4.6-4.1-8.3-4.4-3.5-.3-7.3 2-8.7 2-1.5 0-4.9-1.9-7.5-1.9-5.5.1-11.3 4.4-11.3 13.1 0 2.6.5 5.2 1.4 8 1.3 3.6 5.8 12.4 10.5 12.3 2.5-.1 4.2-1.8 7.4-1.8 3.1 0 4.7 1.8 7.5 1.8 4.8-.1 8.9-8.1 10.1-11.7-6.3-3.1-6-9-6-9.1zm-5.5-16.2c2.7-3.2 2.4-6.1 2.4-7.1-2.4.1-5.1 1.6-6.7 3.4-1.7 1.9-2.7 4.4-2.5 7.1 2.5.2 4.8-1.1 6.8-3.4z" />
  </svg>
);

Apple.propTypes = {
  title: string,
};

Apple.defaultProps = {
  title: null,
};

export default Apple;
