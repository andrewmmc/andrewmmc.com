import React from 'react';
import { shape } from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

import { rhythm } from '../utils/typography';

const PlaceHolder = styled.div`
  width: 100%;
  height: 400px;
  background-color: #eeeeee;
  margin-bottom: ${rhythm(1)};
`;

const StyledBackgroundImage = styled(BackgroundImage).attrs({
  backgroundColor: '#eeeeee',
})`
  width: 100%;
  height: 400px;
  background-position: center;
  margin-bottom: ${rhythm(1)};
`;

const FeaturedImage = ({ fluid, fixed, ...props }) => {
  if (fluid || fixed) {
    return <StyledBackgroundImage fluid={fluid} fixed={fixed} {...props} />;
  }
  return <PlaceHolder {...props} />;
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
