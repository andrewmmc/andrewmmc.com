import React from 'react';
import { shape } from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

import { lightGray, gray } from '../utils/color';
import { rhythm } from '../utils/typography';

const PlaceHolder = styled.div`
  width: 100%;
  height: 240px;
  background-color: ${lightGray};
  margin-bottom: ${rhythm(0.75)};
`;

const StyledBackgroundImage = styled(BackgroundImage).attrs({
  backgroundColor: gray,
})`
  width: 100%;
  height: 240px;
  background-position: center;
  margin-bottom: ${rhythm(0.75)};
  
  &::before, &::after {
    background-size: cover;
    background-position: center;
  }
`;

const Thumbnail = ({ fluid, fixed, ...props }) => {
  if (fluid || fixed) {
    return <StyledBackgroundImage fluid={fluid} fixed={fixed} {...props} />;
  }
  return <PlaceHolder {...props} />;
};

Thumbnail.defaultProps = {
  fluid: null,
  fixed: null,
};

Thumbnail.propTypes = {
  fluid: shape({}),
  fixed: shape({}),
};

export default Thumbnail;
