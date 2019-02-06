import React from 'react';
import { string } from 'prop-types';

const Sass = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M28.8 38.4c-.1.1-.1.1 0 0zm17.1-5.9c-1.5 0-2.9.4-4 .9-.4-.8-.8-1.5-.9-2.1s-.2-1-.1-1.7.5-1.8.5-1.9-.1-.5-1-.5-1.6.2-1.7.4-.3.8-.4 1.3c-.2.8-1.8 3.7-2.7 5.2-.3-.6-.6-1.1-.6-1.5-.1-.6-.2-1-.1-1.7s.5-1.8.5-1.9-.1-.5-1-.5-1.6.2-1.7.4-.2.8-.4 1.3-2.3 5.3-2.9 6.6c-.3.6-.5 1.1-.7 1.5 0 .1 0 .1-.1.1v-.1c-.2.3-.2.5-.2.5-.1.2-.2.4-.3.4 0 0-.1-.6 0-1.4.3-1.7 1.1-4.2 1.1-4.3 0 0 .1-.5-.5-.7-.5-.2-.7.2-.8.2s-.1.1-.1.1.7-2.9-1.3-2.9c-1.3 0-3 1.4-3.9 2.6-.5.3-1.7.9-3 1.6-.5.3-1 .5-1.4.8l-.1-.1c-2.5-2.6-7-4.5-6.8-8 .1-1.3.5-4.7 8.7-8.8C26.8 15 32.2 16 33.1 18c1.3 2.9-2.9 8.4-9.9 9.1-2.7.3-4.1-.7-4.4-1.1-.4-.4-.4-.4-.6-.4-.2.1-.1.5 0 .7.2.5 1.1 1.5 2.5 2 1.3.4 4.4.7 8.2-.8 4.2-1.6 7.6-6.2 6.6-10-1-3.9-7.4-5.1-13.5-3-3.6 1.3-7.5 3.3-10.4 5.9-3.3 3.1-3.9 5.9-3.7 7 .8 4 6.4 6.7 8.6 8.6-.1.1-.2.1-.3.2-1.1.6-5.4 2.8-6.4 5.1-1.2 2.7.2 4.6 1.1 4.8 2.9.8 5.8-.6 7.4-3s1.4-5.4.7-6.8v-.1c.3-.2.6-.3.9-.5.6-.3 1.1-.6 1.6-.9-.3.7-.5 1.6-.6 2.9-.1 1.5.5 3.5 1.3 4.2.4.3.8.3 1.1.3.9 0 1.4-.8 1.8-1.7.6-1.1 1.1-2.5 1.1-2.5s-.6 3.6 1.1 3.6c.6 0 1.3-.8 1.6-1.3s0 0 0-.1c.1-.1.1-.2.1-.2.3-.4.8-1.5 1.7-3.2 1.1-2.2 2.2-4.9 2.2-4.9s.1.7.4 1.8c.2.7.6 1.4.9 2.1-.3.4-.4.6-.4.6-.2.3-.4.6-.7.9-.9 1-1.9 2.2-2.1 2.6s-.1.7.2.9c.2.2.6.2 1.1.2.8-.1 1.3-.2 1.6-.4.4-.2.9-.4 1.4-.7.9-.6 1.4-1.5 1.3-2.7 0-.7-.2-1.3-.5-1.9.1-.1.2-.2.2-.3 1.4-2 2.4-4.2 2.4-4.2s.1.7.4 1.8c.2.6.5 1.2.8 1.8-1.3 1-2.1 2.2-2.3 3-.5 1.5-.1 2.1.6 2.3.3.1.8-.1 1.2-.2.4-.2 1-.4 1.5-.8.9-.6 1.7-1.5 1.6-2.7 0-.5-.2-1.1-.4-1.6 1.1-.5 2.5-.7 4.3-.5 3.8.4 4.6 2.8 4.4 3.8-.1 1-.9 1.6-1.2 1.7-.3.2-.4.2-.3.4 0 .2.2.2.4.1.3-.1 2-.8 2.1-2.7.3-2.2-1.9-4.8-5.9-4.7zm-29.5 9.9c-1.3 1.4-3 1.9-3.8 1.5-.8-.5-.5-2.5 1.1-4 .9-.9 2.2-1.7 3-2.2.2-.1.5-.3.8-.5h.1c.1 0 .1-.1.2-.1.5 2-.1 3.9-1.4 5.3zm9.2-6.3c-.4 1.1-1.4 3.8-1.9 3.7s-.8-2.2-.1-4.3c.3-1 1.1-2.3 1.5-2.8.7-.8 1.5-1 1.6-.7.3.5-.8 3.5-1.1 4.1zm7.6 3.7c-.2.1-.4.2-.4.1-.1 0 .1-.2.1-.2s1-1 1.3-1.5c.2-.3.5-.6.7-1v.1c.1 1.3-1.1 2.1-1.7 2.5zm5.9-1.4c-.1-.1-.1-.4.4-1.4.2-.4.6-1.1 1.3-1.7.1.3.1.5.1.7 0 1.6-1.1 2.2-1.8 2.4z" />
  </svg>
);

Sass.propTypes = {
  title: string,
};

Sass.defaultProps = {
  title: null,
};

export default Sass;
