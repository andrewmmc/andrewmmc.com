import React from 'react';
import { shape, arrayOf, string, bool } from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import {
  Link,
  List,
  ListItem,
  Text,
  Stack,
  Skeleton,
  Icon,
  Box,
} from '@chakra-ui/core';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import Heading from 'components/Heading';

const PostList = ({ title, posts = [], loading = false, moreLink }) => {
  const items = loading
    ? [
        { key: 'loading-1' },
        { key: 'loading-2' },
        { key: 'loading-3' },
        { key: 'loading-4' },
        { key: 'loading-5' },
      ]
    : posts;

  return (
    <Stack spacing={4}>
      <Heading as="h2" size="sm" color="gray.400" textTransform="uppercase">
        {title}
      </Heading>
      <List spacing={6}>
        {items.map((item) => {
          const { title, isoDate, link, key } = item;
          return (
            <ListItem key={key || link}>
              <Stack spacing={1}>
                <Stack isInline spacing={4} color="gray.600" fontSize="sm">
                  <Skeleton isLoaded={!loading}>
                    <Text as="time">
                      {isoDate
                        ? format(parseISO(isoDate), 'MMMM dd, yyyy')
                        : 'Loading'}
                    </Text>
                  </Skeleton>
                </Stack>
                <Heading as="h3" size="md">
                  <Skeleton isLoaded={!loading}>
                    <Link as={GatsbyLink} to={link || ``}>
                      {title || 'Loading'}
                    </Link>
                  </Skeleton>
                </Heading>
              </Stack>
            </ListItem>
          );
        })}
      </List>
      {moreLink && (
        <Box mt={2}>
          <Link as={GatsbyLink} to={moreLink} color="primary.500">
            Older Posts
            <Icon name="chevron-right" ml="1" />
          </Link>
        </Box>
      )}
    </Stack>
  );
};

PostList.propTypes = {
  title: string.isRequired,
  posts: arrayOf(shape({})).isRequired,
  loading: bool.isRequired,
  moreLink: string,
};

PostList.defaultProps = {
  more: undefined,
};

export default PostList;
