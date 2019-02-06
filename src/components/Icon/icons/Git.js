import React from 'react';
import { string } from 'prop-types';

const Git = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M51.3 28.3L31.7 8.7c-.9-.9-2.4-.9-3.3 0L24 13l4.8 4.8c.4-.1.8-.2 1.2-.2 1.8 0 3.3 1.5 3.3 3.3 0 .4-.1.8-.2 1.2L38 27c.3-.1.7-.2 1.1-.2 1.8 0 3.3 1.5 3.3 3.3s-1.5 3.3-3.3 3.3-3.3-1.5-3.3-3.3c0-.5.1-.9.3-1.3l-4.6-4.5v12c1.1.6 1.8 1.7 1.8 2.9 0 1.8-1.5 3.3-3.3 3.3s-3.3-1.5-3.3-3.3c0-1.4.8-2.5 2-3V24c-1.2-.5-2-1.7-2-3 0-.4.1-.8.2-1.2L22.1 15 8.7 28.3c-.9.9-.9 2.4 0 3.3l19.7 19.7c.9.9 2.4.9 3.3 0l19.7-19.7c.8-.9.8-2.3-.1-3.3z" />
  </svg>
);

Git.propTypes = {
  title: string,
};

Git.defaultProps = {
  title: null,
};

export default Git;
