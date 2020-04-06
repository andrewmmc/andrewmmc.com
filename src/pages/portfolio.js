/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import media from 'styled-media-query';

import Layout from 'components/Layout';
import Seo from 'components/Seo';
import Thumbnail from 'components/Thumbnail';

const Portfolio = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Seo
        title="Portfolio"
        keywords={[
          'portfolio',
          'andrew',
          'andrewmok',
          'frontend',
          'javascript',
        ]}
      />
      <Main>
        {posts.map(({ node }) => {
          const { featuredImage } = node.frontmatter;
          return (
            <Card key={node.fields.slug}>
              <Link to={node.fields.slug}>
                {featuredImage ? (
                  <Thumbnail fluid={featuredImage.childImageSharp.fluid} auto />
                ) : (
                  <Thumbnail auto />
                )}
              </Link>
            </Card>
          );
        })}
      </Main>
    </Layout>
  );
};

Portfolio.propTypes = {
  data: shape({}).isRequired,
};

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem -1rem;
`;

const Card = styled.div`
  flex: 0 100%;
  padding: 1rem;

  ${media.greaterThan('small')`
    flex: 0 50%;
  `};
`;

export default Portfolio;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "portfolio" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            type
          }
          frontmatter {
            featuredImage {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1280) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
/* eslint-enable react/no-danger */
