import React from 'react';
import { string } from 'prop-types';

const InternetExplorer = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M49.5 21.7c.9-2.1 1.8-5.2 1.8-7.6 0-6.2-6.8-8.5-18-3.3-9.2-.6-18.2 6.3-20.4 16 2.7-3 6.7-7.1 10.5-8.7-4.7 4.2-8.6 9.4-11.7 14.9C10 36.3 8 41.6 8 45.5c0 8.5 8 7.4 15.5 3.6 2.7 1.3 5.7 1.3 8.7 1.3 8.3 0 15.8-4.7 18.6-12.5H40.5c-4.5 7.6-16.9 4.6-16.9-4.1h28.3c.5-3.7-.2-8.2-2.4-12.1zm-36 16.1c1.5 4.4 4.6 8.2 8.6 10.6-7.6 4.2-14.8 2.5-8.6-10.6zm10-9.3c.2-4.7 4.3-8.2 8.9-8.2s8.8 3.4 8.9 8.2zm15.9-16.2c1.8-.9 4.2-1.9 6.2-1.9 2.7 0 4.7 1.9 4.7 4.6 0 1.7-.6 4.2-1.3 5.8-2.2-3.5-5.6-6.9-9.6-8.5z" />
  </svg>
);

InternetExplorer.propTypes = {
  title: string,
};

InternetExplorer.defaultProps = {
  title: null,
};

export default InternetExplorer;
