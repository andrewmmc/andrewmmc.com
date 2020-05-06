import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import Iframe from 'iframe-resizer-react';

const LIKECOIN_ID = 'andrewmmc';

const Rewards = ({ referrer }) => {
  return (
    <StyledIframe
      src={`//button.like.co/in/embed/${LIKECOIN_ID}/button?type=wp&referrer=${referrer}`}
      inPageLinks
      checkOrigin={['//button.like.co']}
    />
  );
};

Rewards.propTypes = {
  referrer: string.isRequired,
};

const StyledIframe = styled(Iframe)`
  border: none;
  margin: 0;
`;

export default Rewards;
