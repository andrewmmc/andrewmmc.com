import React from 'react';
import { string } from 'prop-types';

const Opera = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M35.8 10.9c-15.1 0-22.4 19.9-13.1 31.5 3.2 4 7.9 6.7 13.1 6.7 3.2 0 6.2-1 8.8-2.7-3.9 3.5-9 5.6-14.7 5.6h-1.1C17.3 51.4 8 41.8 8 30 8 17.8 17.8 8 30 8h.1c5.6 0 10.7 2.1 14.6 5.6-2.6-1.7-5.6-2.7-8.9-2.7zm9.1 35.3c-3.6 2.2-8 2.1-11.7-.5 5-1.8 8.7-8.1 8.7-15.7 0-7.5-3.7-13.8-8.6-15.7 3.7-2.6 8.1-2.7 11.8-.4 9.3 8.7 9.2 23.6-.2 32.3z" />
  </svg>
);

Opera.propTypes = {
  title: string,
};

Opera.defaultProps = {
  title: null,
};

export default Opera;
