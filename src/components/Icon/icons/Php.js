import React from 'react';
import { string } from 'prop-types';

const Php = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M12 8c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4zm.4 16h5.3c2.6 0 4.3 1.7 4.3 4.3s-1.8 4.2-4.5 4.2h-2V36h-3.1zm12.2 0h3.1v4.7h4.8V24h3v12h-3v-4.8h-4.8V36h-3.1zm13.8 0h5.3c2.6 0 4.3 1.7 4.3 4.3s-1.8 4.2-4.5 4.2h-2V36h-3.1zm-22.9 2.3v3.8h1.4c1.3 0 2.1-.7 2.1-1.9 0-1.3-.8-1.9-2-1.9zm26 0v3.8h1.4c1.3 0 2.1-.7 2.1-1.9 0-1.3-.8-1.9-2-1.9z" />
  </svg>
);

Php.propTypes = {
  title: string,
};

Php.defaultProps = {
  title: null,
};

export default Php;
