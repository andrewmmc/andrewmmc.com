import React from 'react';
import { string } from 'prop-types';

const Hotjar = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M46.9 22.3C40.3 10.6 20.9 8 20.9 8s9 9.8-2.5 17.5c-7.2 4.9-10.1 11.2-7 18.2 2.4 5.3 7.4 7.5 12.8 8.3-2.6-4.9-.6-10.9-.4-11.5 5.1 7.7 14.6 0 9.8-8.3 6.3 1.4 7.2 12.3 2.4 19.1 7.2-2.3 12-7.9 13.3-12.9 1.3-5.3.3-11.4-2.4-16.1z" />
  </svg>
);

Hotjar.propTypes = {
  title: string,
};

Hotjar.defaultProps = {
  title: null,
};

export default Hotjar;
