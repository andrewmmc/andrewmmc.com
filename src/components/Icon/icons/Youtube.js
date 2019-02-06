import React from 'react';
import { string } from 'prop-types';

const Youtube = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M51.1 19.4c-.5-1.9-2-3.4-3.9-3.9-3.4-1-17.2-1-17.2-1s-13.8 0-17.2.9c-1.9.5-3.4 2-3.9 3.9C8 22.8 8 30 8 30s0 7.2.9 10.7c.5 1.9 2 3.3 3.9 3.9 3.4.9 17.2.9 17.2.9s13.8 0 17.2-.9c1.9-.5 3.4-1.9 3.9-3.9.9-3.5.9-10.7.9-10.7s0-7.2-.9-10.6zM25.5 36.6V23.5L37 30z" />
  </svg>
);

Youtube.propTypes = {
  title: string,
};

Youtube.defaultProps = {
  title: null,
};

export default Youtube;
