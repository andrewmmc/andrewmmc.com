import React from 'react';
import { string } from 'prop-types';

const Windows = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M8 14.1l18-2.5V29H8zm0 31.8l18 2.5V31.2H8zm20 2.8L52 52V31.2H28zm0-37.4V29h24V8z" />
  </svg>
);

Windows.propTypes = {
  title: string,
};

Windows.defaultProps = {
  title: null,
};

export default Windows;
