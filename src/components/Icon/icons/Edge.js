import React from 'react';
import { string } from 'prop-types';

const Edge = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M50.4 28.9c0-3.9-.7-7.5-2.6-10.9-3.6-6.5-10-10-17.5-10-12.5 0-19.4 9.3-20.7 19.5C13.4 22 20 16.7 29.2 16.4c0 0 9.7 0 8.8 9.3H22.4c.6-3.3 1.6-5.2 3-7-6.7 3.1-10.8 8.5-10.7 16.7.1 6.3 4.4 12.8 10.7 15.3 7.4 2.8 17.1.6 21.3-1.9v-9.3c-7.2 5-24 5.4-24.2-6h27.9z" />
  </svg>
);

Edge.propTypes = {
  title: string,
};

Edge.defaultProps = {
  title: null,
};

export default Edge;
