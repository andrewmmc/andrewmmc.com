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
import { rhythm, scale } from 'utils/typography';

export const Article = styled.article`
  margin: 1.5rem 0;
  
  &:first-child,
  &:last-child {
    margin: 0; // TODO: Fix margin hack
  }
`;

export const Title = styled.h3`
  ${scale(0.2)};
  margin: ${rhythm(0.1)} 0 ${rhythm(0.2)} 0;
  font-weight: 600;
`;

export const Info = styled.small`
  color: ${rgba(black, 0.7)};
  
  span:first-child {
    margin-right: ${rhythm(0.5)};
  }
`;

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout cover={<Thumbnail fluid={data.featuredImage.childImageSharp.fluid} />}>
      <Seo keywords={['blog', 'andrew', 'andrewmok']} />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug;
        const { date } = node.frontmatter;
        return (
          <Article key={node.fields.slug}>
            <Info>
              <span>{date}</span>
              <span>{node.fields.readingTime.text}</span>
            </Info>
            <Title>
              <Link to={node.fields.slug}>
                {title}
              </Link>
            </Title>
          </Article>
        );
      })}
    </Layout>
  );
};

BlogIndex.propTypes = {
  data: shape({}).isRequired,
};

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
