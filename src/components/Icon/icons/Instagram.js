import React from 'react';
import { string } from 'prop-types';

const Instagram = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M30.1 19.6c-6.2 0-11.3 5-11.3 11.3s5 11.3 11.3 11.3 11.3-5 11.3-11.3-5.1-11.3-11.3-11.3zm0 18.6c-4 0-7.3-3.3-7.3-7.3s3.3-7.3 7.3-7.3 7.3 3.3 7.3 7.3-3.3 7.3-7.3 7.3zm14.3-19c0 1.5-1.2 2.6-2.6 2.6-1.5 0-2.6-1.2-2.6-2.6s1.2-2.6 2.6-2.6 2.6 1.1 2.6 2.6zm7.5 2.6c-.2-3.5-1-6.6-3.6-9.2S42.6 9.2 39.1 9c-3.6-.2-14.5-.2-18.1 0-3.5.2-6.6 1-9.2 3.5s-3.4 5.7-3.6 9.2C8 25.5 8 36.3 8.2 40c.2 3.5 1 6.6 3.6 9.2s5.7 3.4 9.2 3.6c3.6.2 14.5.2 18.1 0 3.5-.2 6.6-1 9.2-3.6s3.4-5.7 3.6-9.2c.2-3.7.2-14.5 0-18.2zm-4.7 22.1c-.8 1.9-2.2 3.4-4.2 4.1-2.9 1.1-9.8.9-13 .9s-10 .3-12.9-.9c-1.9-.8-3.4-2.2-4.2-4.2-1.1-2.9-.9-9.8-.9-13s-.3-10.1.9-13c.8-1.9 2.2-3.4 4.2-4.2 2.9-1.1 9.8-.9 13-.9s10.1-.3 13 .9c1.9.8 3.4 2.2 4.2 4.2 1.1 2.9.9 9.8.9 13s.2 10.2-1 13.1z" />
  </svg>
);

Instagram.propTypes = {
  title: string,
};

Instagram.defaultProps = {
  title: null,
};

export default Instagram;