import React, { memo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Box, Flex, IconButton } from '@chakra-ui/core';
import {
  FiFacebook,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiRss,
  FiInstagram,
} from 'react-icons/fi';
import { RiMediumLine } from 'react-icons/ri';

const Footer = (props) => {
  const data = useStaticQuery(pageQuery);
  const {
    githubId,
    linkedinId,
    facebookId,
    instagramId,
    twitterId,
    mediumId,
  } = data.prismicSettings.data;

  return (
    <Flex
      as="footer"
      flexDirection={['column', 'row']}
      flexWrap="nowrap"
      justify="space-between"
      alignItems="center"
      maxW="3xl"
      m="0 auto"
      px="4"
      py="3"
      color="gray.700"
      {...props}
    >
      <Box mb={[2, 0]}>© {new Date().getFullYear()}</Box>
      <Box>
        <IconButton
          as="a"
          href="/rss.xml"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="RSS"
          variant="ghost"
          _active={{ bg: 'gray.100' }}
          icon={FiRss}
        />
        {githubId.text && (
          <IconButton
            as="a"
            href={`https://github.com/${githubId.text}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            variant="ghost"
            _active={{ bg: 'gray.100' }}
            icon={FiGithub}
          />
        )}
        {twitterId.text && (
          <IconButton
            as="a"
            href={`https://twitter.com/${twitterId.text}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            variant="ghost"
            _active={{ bg: 'gray.100' }}
            icon={FiTwitter}
          />
        )}
        {facebookId.text && (
          <IconButton
            as="a"
            href={`https://facebook.com/${facebookId.text}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            variant="ghost"
            _active={{ bg: 'gray.100' }}
            icon={FiFacebook}
          />
        )}
        {instagramId.text && (
          <IconButton
            as="a"
            href={`https://instagram.com/${instagramId.text}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            variant="ghost"
            _active={{ bg: 'gray.100' }}
            icon={FiInstagram}
          />
        )}
        {linkedinId.text && (
          <IconButton
            as="a"
            href={`https://linkedin.com/in/${linkedinId.text}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin"
            variant="ghost"
            _active={{ bg: 'gray.100' }}
            icon={FiLinkedin}
          />
        )}
        {mediumId.text && (
          <IconButton
            as="a"
            href={`https://medium.com/${mediumId.text}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
            variant="ghost"
            _active={{ bg: 'gray.100' }}
            icon={RiMediumLine}
          />
        )}
      </Box>
    </Flex>
  );
};

export default memo(Footer);

const pageQuery = graphql`
  query {
    prismicSettings(uid: { eq: "settings" }) {
      data {
        githubId: github_id {
          text
        }
        linkedinId: linkedin_id {
          text
        }
        facebookId: facebook_id {
          text
        }
        instagramId: instagram_id {
          text
        }
        twitterId: twitter_id {
          text
        }
        mediumId: medium_id {
          text
        }
      }
    }
  }
`;
