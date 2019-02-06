import React from 'react';
import { string } from 'prop-types';

const Css3 = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M50.9 6.7c-.4-.5-1-.7-1.5-.7H10.6c-.6 0-1.1.2-1.5.7s-.6 1-.5 1.6L13 47.9c.1.8.7 1.5 1.4 1.7l15 4.3c.2.1.4.1.5.1s.4 0 .5-.1l15-4.3c.8-.2 1.3-.9 1.4-1.7l4.4-39.6c.2-.6 0-1.2-.3-1.6zM41 26.1l-.9 14.6-10 3.3L20 40.7l-.4-7h5.1l.1 3.2 5.2 1.8 5.2-1.8.4-5.7H24.5l-.3-5.1h11.7l.4-5.1H18.7l-.4-5h23.3z" />
  </svg>
);

Css3.propTypes = {
  title: string,
};

Css3.defaultProps = {
  title: null,
};

export default Css3;
