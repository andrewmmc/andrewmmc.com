import React from 'react';
import { string } from 'prop-types';

const Html5 = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M50.9 6.7c-.4-.5-1-.7-1.5-.7H10.6c-.6 0-1.1.2-1.5.7s-.6 1-.5 1.6L13 47.9c.1.8.7 1.5 1.4 1.7l15 4.3c.2.1.4.1.5.1s.4 0 .5-.1l15-4.3c.8-.2 1.3-.9 1.4-1.7l4.4-39.6c.2-.6 0-1.2-.3-1.6zm-9.6 14.2H23.4l.4 5.1h17l-1.3 15-9.5 3h-.1l-9.4-3-.5-6.2h4.6l.2 2.4 5.3 1.2 5.2-1.2.5-6.4H19.6L18.4 16h23.3z" />
  </svg>
);

Html5.propTypes = {
  title: string,
};

Html5.defaultProps = {
  title: null,
};

export default Html5;
