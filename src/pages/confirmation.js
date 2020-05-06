import React from 'react';
import { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from 'components/Layout';
import Seo from 'components/Seo';
import Thumbnail from 'components/Thumbnail';

const Confirmation = ({ data }) => (
  <Layout
    cover={<Thumbnail fluid={data.featuredImage.childImageSharp.fluid} />}
  >
    <Seo title="One Last Step" />
    <Main>
      <h1>One Last Step...</h1>
      <p>
        Thanks for signing up. Please check your inbox and{' '}
        <strong>confirm your subscription</strong>.
      </p>
    </Main>
  </Layout>
);

Confirmation.propTypes = {
  data: shape({}).isRequired,
};

const Main = styled.div`
  margin: 2rem 0;
`;

export default Confirmation;

export const pageQuery = graphql`
  query {
    featuredImage: file(relativePath: { eq: "assets/confirm.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
