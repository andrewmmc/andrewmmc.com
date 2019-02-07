/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import media from 'styled-media-query';
import rgba from 'polished/lib/color/rgba';

import Layout from 'components/Layout';
import Seo from 'components/Seo';
import Thumbnail from 'components/Thumbnail';

import { black } from 'utils/color';
import { rhythm } from 'utils/typography';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${rhythm(0.75)};
`;

const Card = styled.div`
  flex: 0 100%;
  padding: ${rhythm(0.75)};
  
  ${media.greaterThan('small')`
    flex: 0 50%;
  `};
`;

const StyledThumbnail = styled(Thumbnail)`
  transition: 0.5s;
    &:hover, &:focus {
      transform: translateY(-2px);
      box-shadow: 0 0.8em 2em ${rgba(black, 0.05)};
    }
`;

const Portfolio = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Seo title="Portfolio" keywords={['portfolio', 'andrew', 'andrewmok', 'frontend', 'javascript']} />
      <Container>
        {posts.map(({ node }) => {
          const { featuredImage } = node.frontmatter;
          return (
            <Card key={node.fields.slug}>
              <Link to={node.fields.slug}>
                <StyledThumbnail
                  fluid={featuredImage ? featuredImage.childImageSharp.fluid : null}
                  auto
                />
              </Link>
            </Card>
          );
        })}
      </Container>
    </Layout>
  );
};

Portfolio.propTypes = {
  data: shape({}).isRequired,
};

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
                    fluid(quality: 100, maxWidth: 400) {
                        ...GatsbyImageSharpFluid_noBase64
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
