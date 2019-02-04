/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
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
    color: rgba(0, 0, 0, 0.7);
  }

  h3 {
    ${scale(0.5)};
    margin: 0 0 ${rhythm(0.5)} 0;
    font-weight: 600;
  }
`;

const PlaceHolder = styled.div`
  width: 100%;
  height: 240px;
  margin-bottom: ${rhythm(0.75)};
  background-color: #f5f5f5;
  background-image: url('');
  background-size: cover;
  background-position: center center;
  
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0);
    transition: 0.5s;
  }
  
  &:hover::after, &:focus::after {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO
        title="All posts"
        keywords={['blog', 'andrew']}
      />
      <Container>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <Card key={node.fields.slug}>
              <Link to={node.fields.slug}>
                <PlaceHolder />
              </Link>
              <small>{node.frontmatter.date}</small>
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
          }
        }
      }
    }
  }
`;
/* eslint-enable react/no-danger */
