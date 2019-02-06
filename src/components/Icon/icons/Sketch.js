import React from 'react';
import { string } from 'prop-types';

const Sketch = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <path d="M9.6 21.7L8 23.9h8.1l.6-11.6zm32.9-10.4L31 10.1l12.1 13.1zM17.2 26.6l-1-2H8.1l20 23.3zm.2-2.7h25.3L35.4 16 30 10.1zm26.4.8L31.9 48l20-23.3zm.4-11.3l-.8-1.1.1 1.5.5 10.1h8zm-26.9 2.1l-.4 7.6 12.1-13-11.4 1.2zm25.6 9.2H17.1l3.8 7.4L30 49.9z" />
  </svg>
);

Sketch.propTypes = {
  title: string,
};

Sketch.defaultProps = {
  title: null,
};

export default Sketch;
