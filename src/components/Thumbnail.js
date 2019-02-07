import React from 'react';
import { bool, shape } from 'prop-types';
import styled, { css } from 'styled-components';
import media from 'styled-media-query';
import BackgroundImage from 'gatsby-background-image';

import { lightGray } from 'utils/color';

const PlaceHolder = styled.div`
  padding: 0;
  width: 100%;
  height: 250px;
  background-color: ${lightGray};
  
  ${media.greaterThan('small')`
    height: 400px;
  `};

  ${({ auto }) => auto && css`
     height: auto !important;
     padding: 62% 0 0 0 !important;
  `}
`;

const StyledBackgroundImage = styled(BackgroundImage).attrs({
  backgroundColor: lightGray,
})`
  padding: 0;
  width: 100%;
  height: 250px;
  background-position: center;
  
  ${media.greaterThan('small')`
    height: 400px;
  `};

  ${({ auto }) => auto && css`
     height: auto !important;
     padding: 62% 0 0 0 !important;
  `}

  &::before, &::after {
    background-size: cover;
    background-position: center;
  }
`;

const Thumbnail = ({
  fluid, fixed, auto, ...props
}) => {
  if (fluid || fixed) {
    return <StyledBackgroundImage fluid={fluid} fixed={fixed} auto={auto} {...props} />;
  }
  return <PlaceHolder auto={auto} {...props} />;
};

Thumbnail.defaultProps = {
  fluid: null,
  fixed: null,
  auto: false,
};

Thumbnail.propTypes = {
  fluid: shape({}),
  fixed: shape({}),
  auto: bool,
};

export default Thumbnail;
