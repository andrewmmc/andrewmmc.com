import React from 'react';
import { string } from 'prop-types';

const Adobe = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M35.7 11.7H52v36.7zm-11.4 0H8v36.7zM30 25.2l10.3 23.1h-7L30.4 41h-7.5z" />
  </svg>
);

Adobe.propTypes = {
  title: string,
};

Adobe.defaultProps = {
  title: null,
};

export default Adobe;
