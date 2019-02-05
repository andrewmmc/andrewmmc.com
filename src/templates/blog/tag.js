/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../../components/Layout';
import Seo from '../../components/Seo';
import Thumbnail from '../../components/Thumbnail';

import { Container, Card, LinkWithThumbnail } from './style';

const BlogTag = ({ data, pathContext }) => {
  const { tag } = pathContext;
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Seo title="All posts" keywords={['blog', 'andrew']} />
      <h1>{`Tag: ${tag}`}</h1>
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

BlogTag.propTypes = {
  data: shape({}).isRequired,
  pathContext: shape({}).isRequired,
};

export default BlogTag;

export const pageQuery = graphql`
  query query($tag: String) {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "blog" } }, frontmatter: { tags: { in: [$tag] } } }
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
