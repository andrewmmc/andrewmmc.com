import React from 'react';
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby';
import { Text, Flex, Link, Icon, Stack } from '@chakra-ui/core';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

import Heading from './Heading';

const Header = (props) => {
  const data = useStaticQuery(pageQuery);
  const {
    authorName,
    authorDescription,
    avatar,
    homeTitle,
    homeMessage,
    githubId,
  } = data.prismicSettings.data;

  return (
    <Flex
      as="header"
      maxW="3xl"
      m="0 auto"
      px="4"
      py={[8, 12]}
      flexDirection="column"
      justifyContent="space-between"
      {...props}
    >
      <Flex alignSelf="flex-start" pb="6">
        <Link as={GatsbyLink} to="/">
          <StyledAvatar
            fixed={avatar.fixed}
            alt={`${authorName.text} - ${authorDescription.text}`}
          />
        </Link>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Heading>
          <Link as={GatsbyLink} to="/">
            {homeTitle.text}
          </Link>
        </Heading>
        {homeMessage.text && (
          <Text color="gray.600" fontSize="lg" mb={4}>
            {homeMessage.text}
          </Text>
        )}
        <Stack direction="row" spacing={8}>
          <Link as={GatsbyLink} to="/about" color="primary.500">
            About
            <Icon name="chevron-right" ml="1" />
          </Link>
          {githubId && (
            <Link
              as={GatsbyLink}
              to={`https://github.com/${githubId.text}`}
              color="primary.500"
            >
              GitHub
              <Icon name="chevron-right" ml="1" />
            </Link>
          )}
        </Stack>
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
        homeTitle: home_title {
          text
        }
        homeMessage: home_message {
          text
        }
        avatar: profile_image {
          fixed(width: 80, height: 80) {
            ...GatsbyPrismicImageFixed
          }
        }
        compactAvatar: profile_image {
          fixed(width: 40, height: 40) {
            ...GatsbyPrismicImageFixed
          }
        }
        githubId: github_id {
          text
        }
      }
    }
  }
`;

export default Header;
