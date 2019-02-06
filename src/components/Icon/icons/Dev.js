import React from 'react';
import { string } from 'prop-types';

const Dev = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M19.8 25.3c-.4-.3-.8-.4-1.1-.4H17v10.3h1.7c.4 0 .8-.1 1.1-.4.4-.3.6-.7.6-1.3v-6.8c0-.7-.2-1.1-.6-1.4zM47.7 8H12.3C9.9 8 8 9.9 8 12.3v35.4c0 2.4 1.9 4.3 4.3 4.3h35.4c2.4 0 4.3-1.9 4.3-4.3V12.3C52 9.9 50.1 8 47.7 8zM23.1 33.5c0 1.8-1.1 4.6-4.7 4.6h-4.6V21.8h4.7c3.5 0 4.7 2.8 4.7 4.6zm9.9-8.8h-5.2v3.8H31v2.9h-3.2v3.8H33v2.9h-6.1c-1.1 0-2-.8-2-1.9V23.9c0-1.1.8-2 1.9-2H33zm10.2 11.4c-1.3 3-3.6 2.4-4.7 0l-3.8-14.2H38L40.9 33l2.9-11.2H47z" />
  </svg>
);

Dev.propTypes = {
  title: string,
};

Dev.defaultProps = {
  title: null,
};

export default Dev;
