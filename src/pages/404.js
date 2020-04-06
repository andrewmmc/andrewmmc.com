import React from 'react';
import { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from 'components/Layout';
import Seo from 'components/Seo';
import Thumbnail from 'components/Thumbnail';

const NotFound = ({ data }) => (
  <Layout cover={<Thumbnail fluid={data.featuredImage.childImageSharp.fluid} />}>
    <Seo title="404 Not Found" />
    <Main>
      <h1>404 Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      <Link to="/">Back to home</Link>
    </Main>
  </Layout>
);

NotFound.propTypes = {
  data: shape({}).isRequired,
};

const Main = styled.div`
  margin: 2rem 0;
`;

export default NotFound;

export const pageQuery = graphql`
    query {
        featuredImage: file(relativePath: { eq: "assets/404.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 1440) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;
