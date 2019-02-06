/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';

import Layout from 'components/Layout';
import Seo from 'components/Seo';
import Thumbnail from 'components/Thumbnail';

import { black } from 'utils/color';

import { Container, Card } from './style';

const StyledThumbnail = styled(Thumbnail)`
  transition: 0.5s;
    &:hover, &:focus {
      transform: translateY(-2px);
      box-shadow: 0 0.8em 2em ${rgba(black, 0.05)};
    }
`;

const BlogTag = ({ data, pageContext }) => {
  const { tag } = pageContext;
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
              <Link to={node.fields.slug}>
                <StyledThumbnail fluid={featuredImage ? featuredImage.childImageSharp.fluid : null} />
              </Link>
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
  pageContext: shape({}).isRequired,
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
