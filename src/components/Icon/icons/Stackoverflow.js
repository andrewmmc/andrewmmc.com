import React from 'react';
import { string } from 'prop-types';

const Stackoverflow = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M39.7 35.4l-19.2-4.1-.8 3.9 19.2 4zm5-8.5L29.6 14.3l-2.5 3 15.1 12.6zm-3.1 3.9l-17.8-8.3-1.6 3.5L40 34.3zM36.9 8l-3.1 2.4 11.7 15.7 3.1-2.4zm2 32.2H19.2v3.9h19.6v-3.9zm3.9 7.9H15.3V36.3h-3.9V52h35.3V36.3h-3.9z" />
  </svg>
);

Stackoverflow.propTypes = {
  title: string,
};

Stackoverflow.defaultProps = {
  title: null,
};

export default Stackoverflow;
