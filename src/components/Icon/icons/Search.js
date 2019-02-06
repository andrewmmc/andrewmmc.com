import React from 'react';
import { string } from 'prop-types';

const Search = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M51.4 46l-8.6-8.6c-.4-.4-.9-.6-1.5-.6H40c2.4-3 3.8-6.8 3.8-11C43.8 16 35.8 8 25.9 8S8 16 8 25.9s8 17.9 17.9 17.9c4.2 0 8-1.4 11-3.8v1.4c0 .6.2 1.1.6 1.5l8.6 8.6c.8.8 2.1.8 2.9 0l2.4-2.4c.8-.9.8-2.2 0-3.1zm-25.5-9.1c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11c0 6-4.9 11-11 11z" />
  </svg>
);

Search.propTypes = {
  title: string,
};

Search.defaultProps = {
  title: null,
};

export default Search;
