import React from 'react';
import { string } from 'prop-types';

const Database = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M12 8c-2.2 0-4 1.8-4 4v6c0 1.1.9 2 2 2h40c1.1 0 2-.9 2-2v-6c0-2.2-1.8-4-4-4zm-2 16c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h40c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm0 16c-1.1 0-2 .9-2 2v6c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4v-6c0-1.1-.9-2-2-2z" />
  </svg>
);

Database.propTypes = {
  title: string,
};

Database.defaultProps = {
  title: null,
};

export default Database;
