import React from 'react';
import { string } from 'prop-types';
import { Stack, Link } from '@chakra-ui/core';

const Feedback = ({ siteUrl, url }) => {
  return (
    <>
      <Stack isInline spacing={4}>
        <Link
          color="primary.500"
          fontSize="sm"
          href={`https://twitter.com/search?q=${encodeURI(siteUrl + url)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Discuss on Twitter
        </Link>
      </Stack>
    </>
  );
};

Feedback.propTypes = {
  siteUrl: string.isRequired,
  url: string.isRequired,
};

export default Feedback;
