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
} from '@chakra-ui/core';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import Heading from 'components/Heading';

const PostList = ({
  title,
  posts = [],
  loading = false,
  ...props
}) => {
  const items = loading ? new Array(5).fill({}) : posts;
  return (
    <>
      <Stack spacing={4} {...props}>
        <Heading as="h2" size="sm" color="gray.400" textTransform="uppercase">
          {title}
        </Heading>
        <List spacing={3}>
          {items.map((item, index) => {
            // eslint-disable-next-line no-shadow
            const { title, isoDate, link } = item;
            return (
              <ListItem key={link || `post_list_${index}`}>
                <Stack color="gray.600" fontSize="sm">
                  <Skeleton isLoaded={!loading} width="120px">
                    <Text as="time">
                      {isoDate
                        ? format(parseISO(isoDate), 'MMMM dd, yyyy')
                        : `Loading`}
                    </Text>
                  </Skeleton>
                  <Skeleton isLoaded={!loading}>
                    <Heading as="h3" size="md">
                      {loading ? (
                        `Loading`
                      ) : (
                        <Link as={GatsbyLink} to={link}>
                          {title}
                          <Icon name="chevron-right" ml="1" />
                        </Link>
                      )}
                    </Heading>
                  </Skeleton>
                </Stack>
              </ListItem>
            );
          })}
        </List>
      </Stack>
    </>
  );
};

PostList.propTypes = {
  title: string.isRequired,
  posts: arrayOf(shape({})).isRequired,
  loading: bool.isRequired,
};

export default PostList;
