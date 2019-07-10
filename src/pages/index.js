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

const List = styled.ul`
  list-style: none;
  margin: 0;
`;

const Item = styled.li`
  margin: 1.5rem 0;
`;

const Title = styled.h3`
  font-weight: 600;
`;

const Info = styled.small`
  display: block;
  margin: 0 0 0.5rem 0;
  color: ${rgba(black, 0.7)};
  
  time {
    margin-right: 1rem;
  }
`;

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout cover={<Thumbnail fluid={data.featuredImage.childImageSharp.fluid} />}>
      <Seo keywords={['blog', 'andrew', 'andrewmok']} />
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
              <Title>
                <Link to={node.fields.slug}>
                  {title}
                </Link>
              </Title>
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
