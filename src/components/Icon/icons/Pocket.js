import React from 'react';
import { string } from 'prop-types';

const Pocket = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M48 10.4H12c-2.2 0-4 1.8-4 4v13.3c0 12.2 9.8 22 22 22s22-9.8 22-22V14.3c0-2.2-1.7-3.9-4-3.9zM32.1 36.7c-1.2 1.2-3.1 1.1-4.2 0C16.8 26 16.7 26.4 16.7 24.6c0-1.7 1.4-3 3-3 1.7 0 1.6.4 10.3 8.8 8.9-8.5 8.7-8.8 10.4-8.8s3 1.4 3 3c0 1.8-.3 1.6-11.3 12.1z" />
  </svg>
);

Pocket.propTypes = {
  title: string,
};

Pocket.defaultProps = {
  title: null,
};

export default Pocket;
