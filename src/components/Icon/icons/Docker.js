import React from 'react';
import { string } from 'prop-types';

const Docker = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M32.1 28.6h-4.5v-4.1h4.5zm0-14h-4.5v4.2h4.5zm5.3 10h-4.5v4.1h4.5zm-10.7-5h-4.5v4.1h4.5zm5.4 0h-4.5v4.1h4.5zm19 6.9c-1-.7-3.3-.9-5-.6-.2-1.6-1.1-3.1-2.8-4.4l-1-.6-.6 1c-1.3 1.9-1.6 5.1-.3 7.1-.6.3-1.8.8-3.3.7H8.2c-.6 3.5.4 8 3 11.1 2.6 3 6.4 4.6 11.4 4.6 10.8 0 18.8-5 22.6-14 1.5 0 4.6 0 6.3-3.1.1-.2.5-.9.6-1.2zm-35.2-1.9h-4.5v4.1H16zm5.4 0h-4.5v4.1h4.5zm5.4 0h-4.5v4.1h4.5zm-5.4-5h-4.5v4.1h4.5z" />
  </svg>
);

Docker.propTypes = {
  title: string,
};

Docker.defaultProps = {
  title: null,
};

export default Docker;
