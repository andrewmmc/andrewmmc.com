import React from 'react';
import { string } from 'prop-types';

const Chrome = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M19.7 26.6l-6.8-10.4c4.2-5.3 10.6-8.1 17-8.2 3.8 0 7.6.9 11.1 2.9 3.9 2.2 6.8 5.4 8.6 9.1l-18.2-1c-5.1-.2-10 2.7-11.7 7.6zm2.9 3.4c0 4.1 3.3 7.4 7.4 7.4s7.4-3.3 7.4-7.4-3.3-7.4-7.4-7.4-7.4 3.3-7.4 7.4zm27.9-7.9l-12.4.6c3.4 3.9 3.4 9.6.6 13.9L28.8 52c4.1.2 8.4-.7 12.2-2.9 9.5-5.6 13.4-17.1 9.5-27zM19.9 34.2l-8.3-16.3C9.3 21.4 8 25.6 8 30c0 11 8.1 20.1 18.6 21.7l5.7-11.1c-5.2 1-10.1-1.8-12.4-6.4z" />
  </svg>
);

Chrome.propTypes = {
  title: string,
};

Chrome.defaultProps = {
  title: null,
};

export default Chrome;
