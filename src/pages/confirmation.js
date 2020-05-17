import React from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';

import Thumbnail from 'components/Thumbnail';
import BasePage from 'templates/basePage';

const Confirmation = ({ data }) => (
  <BasePage
    title="One Last Step..."
    thumbnail={<Thumbnail fluid={data.featuredImage.childImageSharp.fluid} />}
  >
    <p>
      Thanks for signing up. Please check your inbox and{' '}
      <strong>confirm your subscription</strong>.
    </p>
  </BasePage>
);

Confirmation.propTypes = {
  data: shape({}).isRequired,
};

export default Confirmation;

export const pageQuery = graphql`
  query {
    featuredImage: file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "confirm.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
