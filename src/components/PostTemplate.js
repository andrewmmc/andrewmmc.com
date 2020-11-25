import React from 'react';
import { shape, string, node, arrayOf } from 'prop-types';
import { Text, Stack, Divider, Tag } from '@chakra-ui/core';

import Content from 'components/Content';
import Heading from 'components/Heading';
import PostNav from 'components/PostNav';

export const PostTemplate = ({
  title,
  date,
  category = [],
  content,
  feedback = null,
  previous,
  next,
}) => {
  const previousUrl = previous && previous.fields && previous.fields.slug;
  const previousTitle =
    previous && previous.frontmatter && previous.frontmatter.title;
  const nextUrl = next && next.fields && next.fields.slug;
  const nextTitle = next && next.frontmatter && next.frontmatter.title;

  return (
    <>
      <article>
        <Heading>{title}</Heading>
        <Stack isInline spacing={4} my={4} color="gray.600">
          {date && <Text as="time">{date}</Text>}
        </Stack>
        {category.length > 0 && (
          <Stack isInline spacing={4} my={4}>
            {category.map((item, idx) => {
              return (
                <Tag size="sm" key={`tag_${idx}`}>
                  {item}
                </Tag>
              );
            })}
          </Stack>
        )}
        <Content mt={8} content={content} />
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
  date: string.isRequired,
  readingTime: string,
  category: arrayOf(string).isRequired,
  content: shape({}).isRequired,
  feedback: node,
  previous: shape({}),
  next: shape({}),
};

PostTemplate.defaultProps = {
  readingTime: undefined,
  feedback: undefined,
  previous: undefined,
  next: undefined,
};

export default PostTemplate;
