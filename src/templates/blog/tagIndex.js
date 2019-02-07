/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from 'components/Layout';
import Seo from 'components/Seo';

import { Container, Card, StyledThumbnail } from 'pages/index';

const BlogTagIndex = ({ data, pageContext }) => {
  const { tag } = pageContext;
  const posts = data.allMarkdownRemark.edges;
  const pageTitle = `Tag: ${tag} (${data.allMarkdownRemark.totalCount})`;
  return (
    <Layout>
      <Seo title={pageTitle} keywords={['blog', 'andrew']} />
      <h1>{pageTitle}</h1>
      <Container>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const { featuredImage, date } = node.frontmatter;
          return (
            <Card key={node.fields.slug}>
              <Link to={node.fields.slug}>
                {featuredImage
                  ? <StyledThumbnail fluid={featuredImage.childImageSharp.fluid} auto />
                  : <StyledThumbnail auto />
                }
              </Link>
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

BlogTagIndex.propTypes = {
  data: shape({}).isRequired,
  pageContext: shape({}).isRequired,
};

export default BlogTagIndex;

export const pageQuery = graphql`
  query query($tag: String) {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "blog" } }, frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
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
                    fluid(quality: 90, maxWidth: 1280) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
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
