import React from 'react'; import { string } from 'prop-types';

const Google = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M51.6 30.5C51.6 43.1 43 52 30.4 52c-12.2 0-22-9.8-22-22s9.8-22 22-22c5.9 0 10.9 2.2 14.8 5.8l-6 5.8c-7.9-7.6-22.5-2-22.5 10.4 0 7.7 6.1 13.9 13.6 13.9 8.7 0 12-6.2 12.5-9.5H30.4v-7.6h20.9c.2 1.2.3 2.3.3 3.7z" />
  </svg>
);

Google.propTypes = {
  title: string,
};

Google.defaultProps = {
  title: null,
};

export default Google;
