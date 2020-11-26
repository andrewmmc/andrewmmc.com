import React from 'react';
import { shape, string, node, arrayOf } from 'prop-types';
import _get from 'lodash/get';
import { Text, Stack, Divider, Tag } from '@chakra-ui/core';

import Heading from './Heading';
import PostNav from './PostNav';

const PostTemplate = ({
  title,
  date,
  category = [],
  content,
  feedback = null,
  previous,
  next,
}) => {
  const previousUrl = _get(previous, 'url');
  const previousTitle = _get(previous, 'data.title.text');
  const nextUrl = _get(next, 'url');
  const nextTitle = _get(next, 'data.title.text');

  return (
    <>
      <article>
        <Heading>{title}</Heading>
        {date && (
          <Stack isInline spacing={4} my={4} color="gray.600">
            <Text as="time">{date}</Text>
          </Stack>
        )}
        {category.length > 0 && (
          <Stack isInline spacing={4} my={4}>
            {category.map((item) => {
              return (
                <Tag size="sm" key={item}>
                  {item}
                </Tag>
              );
            })}
          </Stack>
        )}
        {content}
      </article>
      <Divider borderColor="gray.300" mt={8} mb={6} />
      {feedback}
      <PostNav
        previousUrl={previousUrl}
        previousTitle={previousTitle}
        nextUrl={nextUrl}
        nextTitle={nextTitle}
      />
    </>
  );
};

PostTemplate.propTypes = {
  title: string.isRequired,
  date: string,
  category: arrayOf(string),
  content: node.isRequired,
  feedback: node,
  previous: shape({}),
  next: shape({}),
};

PostTemplate.defaultProps = {
  date: undefined,
  category: undefined,
  feedback: undefined,
  previous: undefined,
  next: undefined,
};

export default PostTemplate;
