import React from 'react';
import { number, shape } from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import styled, { css } from 'styled-components';

import { lightGray } from 'utils/color';

const PlaceHolder = styled.div`
  width: 100%;
  background-color: ${lightGray};

  ${({ height }) => css`
    height: ${height ? `${height}px` : 'auto'};
    padding: ${height ? '0' : '62% 0 0 0'};
  `}
`;

const StyledBackgroundImage = styled(BackgroundImage).attrs({
  backgroundColor: lightGray,
})`
  width: 100%;
  background-position: center;

  ${({ height }) => css`
    height: ${height ? `${height}px` : 'auto'};
    padding: ${height ? '0' : '62% 0 0 0'};
  `}

  &::before, &::after {
    background-size: cover;
    background-position: center;
  }
`;

const Thumbnail = ({
  fluid, fixed, height, ...props
}) => {
  if (fluid || fixed) {
    return <StyledBackgroundImage fluid={fluid} fixed={fixed} height={height} {...props} />;
  }
  return <PlaceHolder height={height} {...props} />;
};

Thumbnail.defaultProps = {
  fluid: null,
  fixed: null,
  height: null,
};

Thumbnail.propTypes = {
  fluid: shape({}),
  fixed: shape({}),
  height: number,
};

export default Thumbnail;
