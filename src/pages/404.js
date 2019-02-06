import React from 'react';
import { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';

import FeaturedImage from 'components/FeaturedImage';
import Layout from 'components/Layout';
import Seo from 'components/Seo';

const NotFound = ({ data }) => (
  <Layout cover={<FeaturedImage fluid={data.cover.childImageSharp.fluid} />}>
    <Seo title="404 Not Found" />
    <h1>404 Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link to="/">Back to home</Link>
  </Layout>
);

NotFound.propTypes = {
  data: shape({}).isRequired,
};

export default NotFound;

export const pageQuery = graphql`
    query {
        cover: file(relativePath: { eq: "assets/404.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 1440) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`;
