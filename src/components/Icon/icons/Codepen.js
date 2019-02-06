import React from 'react';
import { string } from 'prop-types';

const Codepen = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M51.2 21.7L31.1 8.3c-.7-.4-1.4-.4-2.1 0L8.8 21.7c-.5.3-.8 1-.8 1.6v13.4c0 .6.3 1.2.8 1.6l20.1 13.4c.7.4 1.4.4 2.1 0l20.1-13.4c.5-.3.8-1 .8-1.6V23.3c.1-.6-.2-1.2-.7-1.6zm-19.3-8.3l14.8 9.9-6.6 4.4-8.2-5.5zm-3.8 0v8.8l-8.2 5.5-6.6-4.4zM11.8 26.8l4.7 3.2-4.7 3.2zm16.3 19.8l-14.8-9.9 6.6-4.4 8.2 5.5zM30 34.5L23.3 30l6.7-4.5 6.7 4.5zm1.9 12.1v-8.8l8.2-5.5 6.6 4.4zm16.3-13.4L43.5 30l4.7-3.2z" />
  </svg>
);

Codepen.propTypes = {
  title: string,
};

Codepen.defaultProps = {
  title: null,
};

export default Codepen;
