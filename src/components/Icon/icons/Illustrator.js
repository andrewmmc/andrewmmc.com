import React from 'react';
import { string } from 'prop-types';

const Illustrator = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M12 8c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4zm27.3 10.5c1.2 0 2.1.8 2.1 1.9s-.8 1.9-2.1 1.9c-1.2 0-2.1-.8-2.1-1.9s.9-1.9 2.1-1.9zm-15.7 1.4h4l7 19.7h-3.8l-1.7-5h-7.3l-1.7 5h-3.6zm1.8 3.8l-2.7 8.1h5.6l-2.7-8.1zm12.2 1H41v15h-3.4z" />
  </svg>
);

Illustrator.propTypes = {
  title: string,
};

Illustrator.defaultProps = {
  title: null,
};

export default Illustrator;
