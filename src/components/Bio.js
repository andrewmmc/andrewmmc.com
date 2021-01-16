import React from 'react';
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby';
import { Text, Flex, Link, Icon, useTheme } from '@chakra-ui/core';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

import Heading from './Heading';

const Bio = (props) => {
  const { breakpoints } = useTheme();
  const data = useStaticQuery(pageQuery);
  const {
    authorName,
    authorDescription,
    mobileAvatar,
    tabletAvatar,
  } = data.prismicSettings.data;
  const avatarSources = [
    mobileAvatar.fixed,
    {
      ...tabletAvatar.fixed,
      media: `(min-width: ${breakpoints[1]})`,
    },
  ];

  return (
    <Flex
      flexDirection={['column-reverse', 'row']}
      justifyContent="space-between"
      {...props}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Heading>Hi, I&apos;m {authorName.text}.</Heading>
        {authorDescription.text && (
          <Text color="gray.600" fontSize="lg" mb={4}>
            {authorDescription.text}
          </Text>
        )}
        <Link as={GatsbyLink} to="/about" color="primary.500">
          About Me
          <Icon name="chevron-right" ml="1" />
        </Link>
      </Flex>
      <Flex alignSelf={['flex-start', 'center']} pb={[4, 0]} pl={[0, 4]}>
        <StyledAvatar fixed={avatarSources} alt={authorName.text} />
      </Flex>
    </Flex>
  );
};

const StyledAvatar = styled(Image)`
  border-radius: 50%;
`;

const pageQuery = graphql`
  query BioQuery {
    prismicSettings(uid: { eq: "settings" }) {
      data {
        authorName: author_name {
          text
        }
        authorDescription: author_description {
          text
        }
        mobileAvatar: profile_image {
          fixed(width: 75, height: 75) {
            ...GatsbyPrismicImageFixed
          }
        }
        tabletAvatar: profile_image {
          fixed(width: 125, height: 125) {
            ...GatsbyPrismicImageFixed
          }
        }
      }
    }
  }
`;

export default Bio;
