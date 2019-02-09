import React from 'react';
import { string } from 'prop-types';

const Linkedin = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M19.7,47.5h-7.9V23.7h7.9V47.5z M15.7,20.5c-2.2,0-4-1.7-4-4s1.7-4,4-4s4,1.7,4,4S17.9,20.5,15.7,20.5z M48.2,47.5h-7.6V35.9c0-2.8-0.1-6.3-4-6.3c-4,0-4.6,3-4.6,6.1v11.8h-7.6V23.7h7.3v3.3h0.1c1-1.9,3.5-3.8,7.2-3.8c7.7,0,9.1,4.9,9.1,11.3C48.2,34.4,48.2,47.5,48.2,47.5z" />
  </svg>
);

Linkedin.propTypes = {
  title: string,
};

Linkedin.defaultProps = {
  title: null,
};

export default Linkedin;
