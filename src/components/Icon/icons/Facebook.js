import React from 'react';
import { string } from 'prop-types';

const Facebook = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M37.2 15.3h4.1v-7c-.7-.1-3.2-.3-6-.3-6 0-10.1 3.6-10.1 10.3v6.2h-6.6v7.8h6.6V52h8.1V32.3h6.3l1-7.8h-7.3v-5.4c0-2.2.7-3.8 3.9-3.8z" />
  </svg>
);

Facebook.propTypes = {
  title: string,
};

Facebook.defaultProps = {
  title: null,
};

export default Facebook;
