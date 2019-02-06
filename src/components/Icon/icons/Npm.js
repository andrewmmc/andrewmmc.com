import React from 'react';
import { string } from 'prop-types';

const Npm = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M30 31.2h-2.4v-4.9H30zm22-9.8v14.7H30v2.4h-9.8v-2.4H8V21.4zm-31.8 2.5h-9.8v9.8h4.9v-7.3h2.4v7.3h2.4v-9.8zm12.2 0h-9.8v12.2h4.9v-2.4h4.9zm17.2 0H34.9v9.8h4.9v-7.3h2.4v7.3h2.4v-7.3H47v7.3h2.4v-9.8z" />
  </svg>
);

Npm.propTypes = {
  title: string,
};

Npm.defaultProps = {
  title: null,
};

export default Npm;
