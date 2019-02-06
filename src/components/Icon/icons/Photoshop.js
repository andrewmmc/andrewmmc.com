import React from 'react';
import { string } from 'prop-types';

const Photoshop = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M12 8c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4zm4 12h8c3.9 0 6.6 2.7 6.6 6.7 0 3.9-2.8 6.6-6.8 6.6h-4.3v6.5H16zm3.5 2.9v7.4H23c2.5 0 4-1.3 4-3.7s-1.4-3.7-4-3.7zm18.9 1.6c3.6 0 5.8 1.6 6 4.3h-3.2C41 27.7 40 27 38.4 27c-1.5 0-2.7.7-2.7 1.8 0 .8.7 1.4 2.2 1.7l2.6.6c2.9.6 4.2 1.9 4.2 4.1 0 2.9-2.6 4.8-6.4 4.8-3.7 0-6.1-1.6-6.3-4.3h3.4c.3 1.1 1.4 1.8 3.1 1.8s2.9-.8 2.9-1.9c0-.8-.6-1.4-2.1-1.7l-2.7-.6c-2.9-.7-4.2-2-4.2-4.2 0-2.8 2.5-4.6 6-4.6z" />
  </svg>
);

Photoshop.propTypes = {
  title: string,
};

Photoshop.defaultProps = {
  title: null,
};

export default Photoshop;
