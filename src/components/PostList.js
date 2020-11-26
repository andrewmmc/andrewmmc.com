import React, { useState } from 'react';
import { shape, arrayOf, string, bool } from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import {
  Icon,
  Flex,
  Link,
  List,
  ListItem,
  Input,
  InputGroup,
  InputRightElement,
  Tag,
  Text,
  Stack,
} from '@chakra-ui/core';
import Heading from 'components/Heading';

const PostList = ({
  posts = [],
  postCategories = [],
  searchPlaceholder = '',
  notFoundText = '',
  showSearchFilter = true,
  showCategoryFilter = true,
}) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const isEmptySearchFilter = query === '';
  const isEmptyCategoryFilter = category === '';

  const handleSearchFilter = (e) => {
    const searchText = (e.target.value || '').toLowerCase();
    setQuery(searchText);
  };

  const toggleCategoryFilter = (e) => {
    const categoryText = e.target.innerText;
    if (categoryText === category) {
      setCategory(''); // reset filter
    } else {
      setCategory(categoryText);
    }
  };

  const results = posts
    .filter(({ node }) => {
      const postCategory = node.tags || [];
      return isEmptyCategoryFilter || postCategory.includes(category);
    })
    .filter(({ node }) => {
      const title = (node.data.title.text || node.url).toLowerCase();
      return isEmptySearchFilter || title.includes(query);
    });

  return (
    <>
      {showSearchFilter && (
        <InputGroup mb={6}>
          <Input
            value={query}
            onChange={handleSearchFilter}
            placeholder={searchPlaceholder}
            size="md"
          />
          <InputRightElement>
            <Icon name="search" color="gray.300" />
          </InputRightElement>
        </InputGroup>
      )}
      {showCategoryFilter && postCategories.length > 0 && (
        <Flex my={4} flexWrap="wrap">
          {postCategories.map(({ fieldValue }) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <Link onClick={toggleCategoryFilter} mr={2} mb={2} key={fieldValue}>
              <Tag
                size="sm"
                variantColor={fieldValue === category ? `primary` : `gray`}
              >
                {fieldValue}
              </Tag>
            </Link>
          ))}
        </Flex>
      )}
      <List mb={4}>
        {results.length > 0 ? (
          results.map(({ node }) => {
            const title = node.data.title.text || node.url;
            const { date } = node.data;
            return (
              <ListItem mb={6} key={node.url}>
                <Stack spacing={1}>
                  <Stack isInline spacing={4} color="gray.600" fontSize="sm">
                    <Text as="time">{date}</Text>
                  </Stack>
                  <Heading as="h2" size="md">
                    <Link as={GatsbyLink} to={`/${node.url}`}>
                      {title}
                    </Link>
                  </Heading>
                </Stack>
              </ListItem>
            );
          })
        ) : (
          <Text>{notFoundText}</Text>
        )}
      </List>
    </>
  );
};

PostList.propTypes = {
  posts: arrayOf(shape({})).isRequired,
  postCategories: arrayOf(shape({})),
  searchPlaceholder: string,
  notFoundText: string,
  showSearchFilter: bool,
  showCategoryFilter: bool,
};

PostList.defaultProps = {
  postCategories: undefined,
  searchPlaceholder: undefined,
  notFoundText: undefined,
  showSearchFilter: true,
  showCategoryFilter: true,
};

export default PostList;
