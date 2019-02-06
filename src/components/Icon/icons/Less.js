import React from 'react';
import { string } from 'prop-types';

const Less = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M50.1 27.5c0-1.4.2-2.2.2-3.8 0-2.4-.9-3.1-2.8-3.1h-1.4v1.7h.4c1 0 1.2.3 1.2 1.5 0 1.1-.1 2.2-.1 3.5 0 1.7.5 2.3 1.6 2.6v.1c-1.1.3-1.6.9-1.6 2.6 0 1.3.1 2.4.1 3.5 0 1.2-.3 1.6-1.2 1.6h-.4v1.7h1.4c1.9 0 2.8-.8 2.8-3.1 0-1.6-.2-2.4-.2-3.8 0-.8.5-1.6 1.9-1.6V29c-1.4 0-1.9-.8-1.9-1.5zm-7.2 2.2c-1.1-.4-2.1-.7-2.1-1.4 0-.5.4-.9 1.2-.9s1.5.3 2.3.9l1.4-1.9c-.9-.7-2.1-1.4-3.7-1.4-2.5 0-4.1 1.4-4.1 3.4 0 1.8 1.6 2.7 2.9 3.2 1.1.4 2.2.8 2.2 1.5 0 .5-.4.9-1.4.9-.9 0-1.8-.4-2.8-1.1L37.4 35c1.1.9 2.7 1.5 4.1 1.5 2.9 0 4.4-1.5 4.4-3.5s-1.6-2.9-3-3.3zm-24.7 4c-.3 0-.6-.2-.6-.9V20.6h-5.1c-2 0-2.8.8-2.8 3.1 0 1.6.2 2.4.2 3.8 0 .8-.5 1.6-1.9 1.6V31c1.4 0 1.9.8 1.9 1.6 0 1.3-.2 2.1-.2 3.7 0 2.4.9 3.1 2.8 3.1h1.4v-1.7h-.4c-.9 0-1.2-.4-1.2-1.6s.1-2.2.1-3.5c0-1.7-.5-2.3-1.6-2.6v-.1c1.1-.3 1.6-.9 1.6-2.6 0-1.3-.1-2.4-.1-3.5 0-1.2.3-1.5 1.2-1.5h1v10.4c0 2.2.8 3.7 3 3.7.7 0 1.2-.1 1.6-.3l-.4-2.4h-.5zm15.9-4C33 29.2 32 29 32 28.2c0-.5.4-.9 1.2-.9s1.5.3 2.3.9l1.4-1.9c-.9-.7-2.1-1.4-3.8-1.4-2.5 0-4.1 1.4-4.1 3.4 0 1.8 1.6 2.7 2.9 3.2 1.1.4 2.2.8 2.2 1.5 0 .5-.4.9-1.4.9-.9 0-1.8-.4-2.8-1.1l-1.4 2.1c1.1.9 2.7 1.5 4.1 1.5 2.9 0 4.4-1.5 4.4-3.5.1-1.9-1.5-2.8-2.9-3.2zm-10.6-4.8c-2.6 0-5.2 2.2-5.1 5.7 0 3.6 2.4 5.7 5.5 5.7 1.3 0 2.7-.5 3.9-1.2l-1.1-1.9c-.8.5-1.6.7-2.4.7-1.4 0-2.6-.7-2.9-2.4h6.5c0-.3.1-.8.1-1.3.1-3-1.5-5.3-4.5-5.3zm-2.1 4.6c.2-1.4 1.1-2.1 2.1-2.1 1.3 0 1.8.9 1.8 2.1z" />
  </svg>
);

Less.propTypes = {
  title: string,
};

Less.defaultProps = {
  title: null,
};

export default Less;