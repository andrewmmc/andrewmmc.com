import React from 'react';
import { string } from 'prop-types';

const Code = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M9.7 9.7c-2 0-3.7 1.7-3.7 3.7v36.9h48V13.4c0-2-1.7-3.7-3.7-3.7zm0 11.1h40.6v25.8H9.7zm22.2 3.6c-.9 0-1.7.6-1.9 1.4l-3.7 14.8c-.2 1 .4 2 1.3 2.2 1 .2 2-.4 2.2-1.3l3.7-14.8c.3-1-.3-2-1.3-2.3 0 .1-.2 0-.3 0zm-11.2 1.9c-.6 0-1.2.3-1.5.8l-4.4 6.6 4.4 6.6c.6.9 1.7 1.1 2.6.6.9-.6 1.1-1.7.6-2.6l-3-4.5 3-4.5c.6-.8.4-2-.5-2.6-.4-.3-.8-.4-1.2-.4zm18.5 0c-1 0-1.8.8-1.8 1.9 0 .4.1.7.3 1l3 4.5-3 4.5c-.6.8-.4 2 .5 2.6.8.6 2 .4 2.6-.5l4.4-6.6-4.4-6.6c-.4-.5-1-.8-1.6-.8z" />
  </svg>
);

Code.propTypes = {
  title: string,
};

Code.defaultProps = {
  title: null,
};

export default Code;
