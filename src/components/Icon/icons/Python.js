import React from 'react';
import { string } from 'prop-types';

const Python = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M26 6c-4.4 0-8 3.6-8 8v2h10c1.1 0 2 .9 2 2s-.9 2-2 2H14c-4.4 0-8 3.6-8 8v8c0 4.4 3.6 8 8 8h2V34c0-3.3 2.7-6 6-6h16c1.1 0 2-.9 2-2V14c0-4.4-3.6-8-8-8zm-2 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm20 6v10c0 3.3-2.7 6-6 6H22c-1.1 0-2 .9-2 2v12c0 4.4 3.6 8 8 8h6c4.4 0 8-3.6 8-8v-2H32c-1.1 0-2-.9-2-2s.9-2 2-2h14c4.4 0 8-3.6 8-8v-8c0-4.4-3.6-8-8-8zm-8 30c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
  </svg>
);

Python.propTypes = {
  title: string,
};

Python.defaultProps = {
  title: null,
};

export default Python;
