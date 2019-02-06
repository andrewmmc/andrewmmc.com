import React from 'react';
import { string } from 'prop-types';

const Mobile = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M39.6 8H20.4c-2.3 0-4.1 1.8-4.1 4.1v35.8c0 2.3 1.8 4.1 4.1 4.1h19.2c2.3 0 4.1-1.8 4.1-4.1V12.1c.1-2.3-1.8-4.1-4.1-4.1zM30 49.2c-1.5 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8 2.8 1.2 2.8 2.8-1.3 2.8-2.8 2.8zm9.6-9.2c0 .6-.5 1-1 1H21.4c-.6 0-1-.5-1-1V13.2c0-.6.5-1 1-1h17.2c.6 0 1 .5 1 1z" />
  </svg>
);

Mobile.propTypes = {
  title: string,
};

Mobile.defaultProps = {
  title: null,
};

export default Mobile;
