import React from 'react';
import { string } from 'prop-types';

const Linkedin = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M17 52H7V22h10zm-5-34c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm41 34h-9.6V37.4c0-3.5-.1-8-5-8-5 0-5.8 3.8-5.8 7.7V52H23V22h9.2v4.1h.1c1.3-2.4 4.4-4.8 9.1-4.8 9.7 0 11.5 6.2 11.5 14.3.1-.1.1 16.4.1 16.4z" />
  </svg>
);

Linkedin.propTypes = {
  title: string,
};

Linkedin.defaultProps = {
  title: null,
};

export default Linkedin;
