import React from 'react';
import { string } from 'prop-types';

const Gitlab = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M17 10.1c-.3-.8-1.3-.8-1.6 0l-4.9 15h11.3c.1.1-4.8-15-4.8-15zM8.1 32.7c-.2.7 0 1.5.6 1.9L30 50.4 10.6 25.2zm13.8-7.5L30 50.4l8.1-25.3H21.9zm30 7.5l-2.5-7.6L30 50.4l21.3-15.8c.6-.4.8-1.2.6-1.9zm-7.3-22.6c-.3-.8-1.3-.8-1.6 0l-4.9 15h11.3z" />
  </svg>
);

Gitlab.propTypes = {
  title: string,
};

Gitlab.defaultProps = {
  title: null,
};

export default Gitlab;
