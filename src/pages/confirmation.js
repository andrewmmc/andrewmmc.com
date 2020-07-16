import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Icon, Link, Text } from '@chakra-ui/core';

import Heading from 'components/Heading';
import Layout from 'components/Layout';
import Seo from 'components/Seo';

const Confirmation = () => (
  <Layout>
    <Seo title="One Last Step..." />
    <Heading>One Last Step...</Heading>
    <Text my={8}>
      Thanks for signing up. Please check your inbox and{' '}
      <strong>confirm your subscription</strong>.
    </Text>
    <Link as={GatsbyLink} to="/" color="primary.500">
      <Icon name="chevron-left" ml="1" />
      Back to home
    </Link>
  </Layout>
);

export default Confirmation;
