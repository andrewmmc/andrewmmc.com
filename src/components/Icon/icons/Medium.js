import React from 'react';
import { string } from 'prop-types';

const Medium = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M13.2 19.7c.1-.5-.2-1.1-.6-1.4l-4.1-4.9v-.7h12.8l9.9 21.6 8.7-21.6H52v.7l-3.5 3.4c-.3.2-.5.6-.4 1v24.7c-.1.4.1.8.4 1l3.4 3.4v.7H34.7v-.7l3.6-3.4c.3-.3.3-.5.3-1v-20l-9.9 25.1h-1.3L15.8 22.3v16.8c-.1.7.1 1.4.6 1.9l4.6 5.6v.7H8v-.7l4.6-5.6c.5-.5.7-1.2.6-1.9z" />
  </svg>
);

Medium.propTypes = {
  title: string,
};

Medium.defaultProps = {
  title: null,
};

export default Medium;
