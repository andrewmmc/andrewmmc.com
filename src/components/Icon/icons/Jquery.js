import React from 'react';
import { string } from 'prop-types';

const Jquery = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M11.6 25.1c0-5.2 1.7-10 4.7-13.8C11.2 15.5 8 21.8 8 28.9c0 12.6 10.2 22.8 22.8 22.8 7.4 0 13.9-3.5 18.1-9-4 3.3-9 5.2-14.5 5.2-12.6 0-22.8-10.2-22.8-22.8z" />
    <path d="M21.9 19.9c0-4.1 1.4-7.9 3.7-10.9-4 3.3-6.5 8.3-6.5 13.9 0 10 8.1 18 18 18 5.9 0 11-2.8 14.3-7.1-3.1 2.6-7.1 4.1-11.5 4.1-9.9 0-18-8.1-18-18z" />
    <path d="M31.9 15.8c0-2.8.9-5.4 2.5-7.4-2.7 2.2-4.4 5.6-4.4 9.4 0 6.8 5.5 12.3 12.3 12.3 4 0 7.5-1.9 9.7-4.8-2.1 1.7-4.9 2.7-7.8 2.7-6.8.1-12.3-5.4-12.3-12.2z" />
  </svg>
);

Jquery.propTypes = {
  title: string,
};

Jquery.defaultProps = {
  title: null,
};

export default Jquery;
