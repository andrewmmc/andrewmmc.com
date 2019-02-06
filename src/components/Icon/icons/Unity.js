import React from 'react';
import { string } from 'prop-types';

const Unity = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M49.1 30.2l2.8-4.8c.1-.2.1-.5 0-.8l-5.6-16c-.2-.5-.7-.8-1.2-.6l-16.4 4c-.3.1-.6.3-.7.6L26.3 17H21c-.3 0-.5.1-.7.3l-12 13c-.4.4-.4 1 0 1.4l12.6 12c.2.2.4.3.7.3h5.7l1.8 4.4c.1.3.4.6.8.6l17.5 3c.5.1 1-.2 1.1-.8L52 35c.1-.3 0-.5-.1-.7zM26.3 17l14.1-2.6L33 29H16.2zm1 27L16.2 33H33l8.8 13.2zm18.1-.1L37 31l7.3-14.6 4.8 13.8z" />
  </svg>
);

Unity.propTypes = {
  title: string,
};

Unity.defaultProps = {
  title: null,
};

export default Unity;
