/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';

import Layout from 'components/Layout';
import Seo from 'components/Seo';
import Thumbnail from 'components/Thumbnail';

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  const { author, authorDescription, seoKeywords } = data.site.siteMetadata;

  return (
    <Layout
      cover={<Thumbnail fluid={data.featuredImage.childImageSharp.fluid} />}
    >
      <Seo keywords={seoKeywords} />
      <Introduction>
        <h1>Hi, I'm {author}.</h1>
        {authorDescription && <p>{authorDescription}</p>}
      </Introduction>
      <List>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const { date } = node.frontmatter;
          return (
            <Item key={node.fields.slug}>
              <Info>
                <time>{date}</time>
                <span>{node.fields.readingTime.text}</span>
              </Info>
              <H3>
                <Link to={node.fields.slug}>{title}</Link>
              </H3>
            </Item>
          );
        })}
      </List>
    </Layout>
  );
};

BlogIndex.propTypes = {
  data: shape({}).isRequired,
};

const Introduction = styled.div`
  margin: 2rem 0;
`;

const List = styled.ul`
  list-style: none;
  margin: 3rem 0;
`;

const Item = styled.li`
  margin: 1.5rem 0;
`;

const H3 = styled.h3`
  font-weight: 600;
`;

const Info = styled.small`
  display: block;
  margin: 0 0 0.5rem 0;
  color: ${({ theme }) => rgba(theme.colors.primaryText, 0.7)};

  time {
    margin-right: 1rem;
  }
`;

export default BlogIndex;

export const pageQuery = graphql`
  query {
    featuredImage: file(relativePath: { eq: "assets/home.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    site {
      siteMetadata {
        author
        authorDescription
        seoKeywords
      }
    }
    allMarkdownRemark(
      filter: { fields: { type: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
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
