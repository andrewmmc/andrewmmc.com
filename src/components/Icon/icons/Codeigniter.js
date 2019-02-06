import React from 'react';
import { string } from 'prop-types';

const Codeigniter = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M11.3 37.2l.3-1.5c.7-3.8 2.4-7.1 4.9-9.9 2.2-2.4 4.6-4.6 6.9-6.9 1.4-1.4 2.9-2.7 4.1-4.2 1.5-1.9 2.6-4 1.9-6.7 2.7 1.8 5.5 6.3 4.3 10.5-.4 1.5-.8 3-1.1 4.6-.2 1.2.2 2.4 1 3.4s2.2 1.4 3.5 1c1.4-.4 2.2-1.3 2.2-2.9 9.5 4.5 12.9 15.4 4.8 22.9-2.3 2.1-4.9 3.5-8 4.5.9-.6 1.6-1.1 2.3-1.7 3.1-2.7 3.9-6.7 1.8-10.3-1.2-2.1-2.9-3.7-4.9-5-1.6-1.1-3.3-2.1-5-3.1-.7-.5-1.4-1-2-1.6-1-.9-1.6-2-1.4-3.5-1.9 1.1-2.8 4.1-1.8 6.3.5 1.1 1.4 2 2.1 3 .4.6.9 1.3 1.1 2 .3 1.1 0 2.2-1 3s-2.4.8-3.5.1c-1-.7-1.5-1.7-1.3-2.9 0-.3.1-.6.1-1.1-2.5 1.8-4.2 3.9-4.6 6.8-.5 3.5 1.4 5.9 4.1 7.9-4.2-1-9.8-4.6-10.8-11.3 0-.3-.2-.6-.2-.9.2-.8.2-1.7.2-2.5z" />
  </svg>
);

Codeigniter.propTypes = {
  title: string,
};

Codeigniter.defaultProps = {
  title: null,
};

export default Codeigniter;
