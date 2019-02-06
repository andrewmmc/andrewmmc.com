/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from 'components/Layout';
import Seo from 'components/Seo';
import Thumbnail from 'components/Thumbnail';

import { Container, Card, ThumbnailLink } from '../templates/blog/style';

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Seo keywords={['blog', 'andrew']} />
      <Container>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const { featuredImage, date } = node.frontmatter;
          return (
            <Card key={node.fields.slug}>
              <ThumbnailLink to={node.fields.slug}>
                <Thumbnail fluid={featuredImage ? featuredImage.childImageSharp.fluid : null} />
              </ThumbnailLink>
              <div>
                <small>{date}</small>
                <h3>
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
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
