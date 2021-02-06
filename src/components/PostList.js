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

const PostList = ({
  title,
  posts = [],
  loading = false,
  moreLink,
  ...props
}) => {
  const items = loading ? new Array(5).fill({}) : posts;

  return (
    <Stack spacing={4} {...props}>
      <Heading as="h2" size="sm" color="gray.400" textTransform="uppercase">
        {title}
      </Heading>
      <List spacing={6}>
        {items.map((item, index) => {
          // eslint-disable-next-line no-shadow
          const { title, isoDate, link } = item;
          return (
            <ListItem key={link || `post_list_${index}`}>
              <Stack spacing={2} color="gray.600" fontSize="sm">
                <Skeleton isLoaded={!loading} height="18px" width="120px">
                  <Text as="time">
                    {isoDate && format(parseISO(isoDate), 'MMMM dd, yyyy')}
                  </Text>
                </Skeleton>
                <Heading as="h3" size="md">
                  <Skeleton isLoaded={!loading} height="27px">
                    <Link as={GatsbyLink} to={link}>
                      {title}
                    </Link>
                  </Skeleton>
                </Heading>
              </Stack>
            </ListItem>
          );
        })}
      </List>
      {moreLink && (
        <Box mt={4}>
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
  moreLink: undefined,
};

export default PostList;
