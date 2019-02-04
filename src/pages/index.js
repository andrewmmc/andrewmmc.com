/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { rgba } from 'polished';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Thumbnail from '../components/Thumbnail';

import { black } from '../utils/color';
import { rhythm, scale } from '../utils/typography';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${rhythm(0.75)};
`;

const Card = styled.div`
  flex: 0 50%;
  padding: ${rhythm(0.75)};
  
  small {
    color: ${rgba(black, 0.7)};
  }

  h3 {
    ${scale(0.5)};
    margin: 0 0 ${rhythm(0.5)} 0;
    font-weight: 600;
  }
`;

const LinkWithThumbnail = styled(Link)`
  &>div {
    opacity: 1;
    transition: 0.5s;

    &:hover, &:focus {
      opacity: 0.8;
    }
  }
`;

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Seo
        title="All posts"
        keywords={['blog', 'andrew']}
      />
      <Container>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const { featuredImage, date } = node.frontmatter;
          return (
            <Card key={node.fields.slug}>
              <LinkWithThumbnail to={node.fields.slug}>
                <Thumbnail fluid={featuredImage ? featuredImage.childImageSharp.fluid : null} />
              </LinkWithThumbnail>
              <small>{date}</small>
              <h3>
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </Card>
          );
        })}
      </Container>
    </Layout>
  );
};

BlogIndex.propTypes = {
  data: shape({}).isRequired,
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { type: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt (truncate: true)
          fields {
            slug
            type
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            featuredImage {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 400) {
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
