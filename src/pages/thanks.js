import React from 'react';
import { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from 'components/Layout';
import Seo from 'components/Seo';
import Thumbnail from 'components/Thumbnail';

const Thanks = ({ data }) => (
  <Layout
    cover={<Thumbnail fluid={data.featuredImage.childImageSharp.fluid} />}
  >
    <Seo title="Thank you for subscribing" />
    <Main>
      <h1>Thank you for subscribing</h1>
      <p>
        You are now confirmed for subscription. You will receive emails when I
        post new content.
      </p>
      <p>
        <strong>No spam</strong> - You can unsubscribe at <i>any time</i>.
      </p>
      <Link to="/">Back to home</Link>
    </Main>
  </Layout>
);

Thanks.propTypes = {
  data: shape({}).isRequired,
};

const Main = styled.div`
  margin: 2rem 0;
`;

export default Thanks;

export const pageQuery = graphql`
  query {
    featuredImage: file(relativePath: { eq: "assets/thanks.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
