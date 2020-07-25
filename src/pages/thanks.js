import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Icon, Link, Text } from '@chakra-ui/core';

import Heading from 'gatsby-theme-minimalism/src/components/Heading';
import Layout from 'gatsby-theme-minimalism/src/components/Layout';
import Seo from 'gatsby-theme-minimalism/src/components/Seo';

const Thanks = () => (
  <Layout>
    <Seo title="Thank you for subscribing" />
    <Heading>Thank you for subscribing</Heading>
    <Text my={8}>
      You are now confirmed for subscription. You will receive emails when I
      post new content. <strong>No spam</strong> - You can unsubscribe at{' '}
      <i>any time</i>.
    </Text>
    <Link as={GatsbyLink} to="/" color="primary.500">
      <Icon name="chevron-left" ml="1" />
      Back to home
    </Link>
  </Layout>
);

export default Thanks;
