import React from 'react';
import { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';

import Thumbnail from 'components/Thumbnail';
import BasePage from 'templates/basePage';

const Thanks = ({ data }) => (
  <BasePage
    title="Thank you for subscribing"
    thumbnail={<Thumbnail fluid={data.featuredImage.childImageSharp.fluid} />}
  >
    <>
      <p>
        You are now confirmed for subscription. You will receive emails when I
        post new content.
      </p>
      <p>
        <strong>No spam</strong> - You can unsubscribe at <i>any time</i>.
      </p>
      <Link to="/">Back to home</Link>
    </>
  </BasePage>
);

Thanks.propTypes = {
  data: shape({}).isRequired,
};

export default Thanks;

export const pageQuery = graphql`
  query {
    featuredImage: file(
      sourceInstanceName: { eq: "assets" }
      relativePath: { eq: "thanks.jpg" }
    ) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
