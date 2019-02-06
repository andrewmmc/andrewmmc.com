import React from 'react';
import { string } from 'prop-types';

const Javascript = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M47.3 8H12.7C10.1 8 8 10.1 8 12.7v34.6c0 2.6 2.1 4.7 4.7 4.7h34.6c2.6 0 4.7-2.1 4.7-4.7V12.7c0-2.6-2.1-4.7-4.7-4.7zM31.9 42.3c0 4.3-2.5 6.2-6.2 6.2-3.3 0-5.2-1.7-6.2-3.8l3.4-2c.6 1.1 1.2 2.1 2.7 2.1 1.4 0 2.2-.5 2.2-2.6v-14h4.1zm9.8 6.3c-3.8 0-6.3-1.8-7.5-4.2l3.4-1.9c.9 1.4 2 2.5 4.1 2.5 1.7 0 2.8-.9 2.8-2 0-1.4-1.1-1.9-3-2.8l-1-.4c-3-1.3-5-2.9-5-6.2 0-3.1 2.4-5.5 6-5.5 2.6 0 4.5.9 5.9 3.3l-3.2 2.1c-.7-1.3-1.5-1.8-2.7-1.8s-2 .8-2 1.8c0 1.2.8 1.7 2.5 2.5l1 .4c3.5 1.5 5.5 3 5.5 6.5.1 3.6-2.9 5.7-6.8 5.7z" />
  </svg>
);

Javascript.propTypes = {
  title: string,
};

Javascript.defaultProps = {
  title: null,
};

export default Javascript;
