import React from 'react';
import { graphql, useStaticQuery, Link as GatsbyLink } from 'gatsby';
import { Text, Flex, Link, Icon, Stack, useTheme } from '@chakra-ui/core';
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
    homeTitle,
    homeMessage,
    githubId,
  } = data.prismicSettings.data;

  return (
    <Flex
      flexDirection="column-reverse"
      justifyContent="space-between"
      {...props}
    >
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Heading>{homeTitle.text}</Heading>
        {homeMessage.text && (
          <Text color="gray.600" fontSize="lg" mb={6}>
            {homeMessage.text}
          </Text>
        )}
        <Stack direction="row" spacing={8}>
          <Link as={GatsbyLink} to="/about" color="primary.500">
            About Me
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
      <Flex alignSelf="flex-start" pb="6">
        <StyledAvatar
          fixed={mobileAvatar.fixed}
          alt={`${authorName.text} - ${authorDescription.text}`}
        />
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
        mobileAvatar: profile_image {
          fixed(width: 80, height: 80) {
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

export default Bio;
