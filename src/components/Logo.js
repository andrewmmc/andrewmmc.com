import React, { memo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Heading from './Heading';

const Logo = (props) => {
  const data = useStaticQuery(pageQuery);
  const { siteName } = data.prismicSettings.data;
  return (
    <Heading as="h1" fontWeight="600" size="md" mb={0} {...props}>
      {siteName.text}
    </Heading>
  );
};

export default memo(Logo);

const pageQuery = graphql`
  query {
    prismicSettings(uid: { eq: "settings" }) {
      data {
        siteName: site_name {
          text
        }
      }
    }
  }
`;
