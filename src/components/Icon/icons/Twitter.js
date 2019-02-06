import React from 'react';
import { string } from 'prop-types';

const Twitter = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M47.5 21v1.2c0 11.9-9.1 25.7-25.7 25.7-5.1 0-9.9-1.5-13.8-4 .7.1 1.4.1 2.2.1 4.2 0 8.1-1.4 11.2-3.9-4-.1-7.3-2.7-8.4-6.3.6.1 1.1.1 1.7.1.8 0 1.6-.1 2.4-.3-4.1-.8-7.2-4.5-7.2-8.9v-.1c1.2.7 2.6 1.1 4.1 1.1-2.4-1.6-4-4.4-4-7.5 0-1.7.4-3.2 1.2-4.6 4.4 5.5 11.1 9 18.6 9.4-.1-.7-.2-1.4-.2-2.1 0-5 4-9 9-9 2.6 0 4.9 1.1 6.6 2.8 2-.4 4-1.1 5.7-2.2-.7 2.1-2.1 3.9-4 5 1.8-.2 3.6-.7 5.2-1.4-1.3 2.1-2.9 3.7-4.6 4.9z" />
  </svg>
);

Twitter.propTypes = {
  title: string,
};

Twitter.defaultProps = {
  title: null,
};

export default Twitter;
