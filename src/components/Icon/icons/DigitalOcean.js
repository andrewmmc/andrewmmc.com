import React from 'react';
import { string } from 'prop-types';

const DigitalOcean = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M15 50h6.5v-6.5H15zM9.5 38v5.5H15V38zm41.4-15c-2-6.6-7.3-11.8-13.9-13.9C21.9 4.4 8 15.6 8 30h8.5c0-9 9-16 18.5-12.6 3.5 1.3 6.3 4.1 7.6 7.6C46 34.5 39.1 43.5 30 43.5V52c14.4 0 25.6-13.9 20.9-29zM30 43.5V35h-8.5v8.5z" />
  </svg>
);

DigitalOcean.propTypes = {
  title: string,
};

DigitalOcean.defaultProps = {
  title: null,
};

export default DigitalOcean;
