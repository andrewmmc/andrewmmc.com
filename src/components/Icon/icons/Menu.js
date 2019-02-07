import React from 'react';
import { string } from 'prop-types';

const Menu = ({ title, ...props }) => (
  <svg viewBox="0 0 60 60" {...props}>
    <title>{title}</title>
    <g>
      <rect x="8" y="12.7" width="44" height="4.1" />
      <rect x="8" y="27.9" width="44" height="4.1" />
      <rect x="8" y="43.2" width="44" height="4.1" />
    </g>
  </svg>
);

Menu.propTypes = {
  title: string,
};

Menu.defaultProps = {
  title: null,
};

export default Menu;
