import React from 'react';
import { shape } from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

import { lightGray } from '../utils/color';
import { rhythm } from '../utils/typography';

const StyledBackgroundImage = styled(BackgroundImage).attrs({
  backgroundColor: lightGray,
})`
  width: 100%;
  height: 400px;
  background-position: center;
  margin-bottom: ${rhythm(1)};
  
  &::before, &::after {
    background-size: cover;
    background-position: center;
  }
`;

const FeaturedImage = ({ fluid, fixed, ...props }) => {
  if (fluid || fixed) {
    return <StyledBackgroundImage fluid={fluid} fixed={fixed} {...props} />;
  }
  return null;
};

FeaturedImage.defaultProps = {
  fluid: null,
  fixed: null,
};

FeaturedImage.propTypes = {
  fluid: shape({}),
  fixed: shape({}),
};

export default FeaturedImage;
