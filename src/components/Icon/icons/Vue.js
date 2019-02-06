import React from 'react';
import { string } from 'prop-types';

const Vue = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M43.1 11.2h-7.6L30 19.9l-4.7-8.7H8l22 37.7 22-37.7zm-29.6 3.1h5.3L30 33.8l11.2-19.5h5.3L30 42.6z" />
  </svg>
);

Vue.propTypes = {
  title: string,
};

Vue.defaultProps = {
  title: null,
};

export default Vue;
