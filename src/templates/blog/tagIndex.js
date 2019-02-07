/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from 'components/Layout';
import Seo from 'components/Seo';

import { Title, Info } from 'pages/index';

const BlogTagIndex = ({ data, pageContext }) => {
  const { tag } = pageContext;
  const posts = data.allMarkdownRemark.edges;
  const pageTitle = `Tag: ${tag} (${data.allMarkdownRemark.totalCount})`;
  return (
    <Layout>
      <Seo title={pageTitle} keywords={['blog', 'andrew']} />
      <h1>{pageTitle}</h1>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        const { date } = node.frontmatter;
        return (
          <div key={node.fields.slug}>
            <Info>
              <span>{date}</span>
              <span>{node.fields.readingTime.text}</span>
            </Info>
            <Title>
              <Link to={node.fields.slug}>
                {title}
              </Link>
            </Title>
            <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        );
      })}
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
            readingTime {
                text
            }
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
/* eslint-enable react/no-danger */
