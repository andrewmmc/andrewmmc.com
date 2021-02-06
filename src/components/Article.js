import React from 'react';
import { string, node } from 'prop-types';
import { Box, Text, Stack } from '@chakra-ui/core';
import Heading from './Heading';

const Article = ({ title, date, content, ...props }) => {
  return (
    <Box as="article" {...props}>
      <Heading
        as="h2"
        size="sm"
        color="gray.400"
        textTransform="uppercase"
        mb={4}
      >
        {title}
      </Heading>
      {date && (
        <Stack isInline spacing={4} color="gray.600">
          <Text as="time">{date}</Text>
        </Stack>
      )}
      {content}
    </Box>
  );
};

Article.propTypes = {
  title: string.isRequired,
  date: string,
  content: node.isRequired,
};

Article.defaultProps = {
  date: undefined,
};

export default Article;
