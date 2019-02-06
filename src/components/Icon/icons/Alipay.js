import React from 'react';
import { string } from 'prop-types';

const Alipay = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M45.1 8H14.9C11.1 8 8 11.1 8 14.9v30.2c0 3.8 3.1 6.9 6.9 6.9h30.2c3.8 0 6.9-3.1 6.9-6.8-4.5-2.5-10.9-5.9-16.9-8.7-3.1 4.3-8.3 8-14.6 8-6.9 0-9.2-4.4-9.5-7.5-.4-3.8 1.5-8 9.8-8 3.5 0 7.8 1 12.5 2.5 1.6-3 2.6-5.9 2.6-5.9H18.4V24h9v-3.1H16.7V19h10.7v-5h5v5h10.7v1.9H32.4V24h8.7s-1.5 4.6-3.8 8.9c4.8 1.6 9.8 3.5 14.6 5.2v-23c.1-4-3-7.1-6.8-7.1zM12.6 36.6c.1 2 1 5.3 6.9 5.3 5.1 0 9.1-3.9 11.6-7.2-4.4-1.8-8.3-3.1-10.7-3.1-6.7 0-7.9 3.3-7.8 5z" />
  </svg>
);

Alipay.propTypes = {
  title: string,
};

Alipay.defaultProps = {
  title: null,
};

export default Alipay;
