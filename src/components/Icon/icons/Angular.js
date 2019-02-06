import React from 'react';
import { string } from 'prop-types';

const Angular = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M26 31.3h8l-4-9.7z" />
    <path d="M30 6.4L8 14.2l3.4 29.1L30 53.6l18.6-10.3L52 14.2zm13.7 36h-5.1l-2.8-6.9H24.2l-2.8 6.9h-5.1L30 11.6z" />
  </svg>
);

Angular.propTypes = {
  title: string,
};

Angular.defaultProps = {
  title: null,
};

export default Angular;
