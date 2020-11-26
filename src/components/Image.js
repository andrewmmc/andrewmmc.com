import React from 'react';
import { shape, arrayOf, number, oneOfType } from 'prop-types';
import { Box } from '@chakra-ui/core';
import Image from 'gatsby-background-image';

export const BackgroundImage = ({
  fluid,
  fixed,
  height = [200, 350],
  ...props
}) => {
  return (
    <Box w="100%" h={height}>
      <Image
        fluid={fluid}
        fixed={fixed}
        style={{ height: '100%' }}
        {...props}
      />
    </Box>
  );
};

BackgroundImage.defaultProps = {
  fluid: undefined,
  fixed: undefined,
  height: undefined,
};

BackgroundImage.propTypes = {
  fluid: shape({}),
  fixed: shape({}),
  height: oneOfType([arrayOf(number), number]),
};

export default BackgroundImage;
