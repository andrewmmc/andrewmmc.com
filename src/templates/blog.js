/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Bio from '../components/Bio';
import FeaturedImage from '../components/FeaturedImage';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { rhythm, scale } from '../utils/typography';

const Title = styled.h1`
  p {
    ${scale(0.5)};
    font-weight: 500;
    margin-top: ${rhythm(0.5)};
  }
`;

const Date = styled.p`
  ${scale(0.2)};
  display: block;
  margin-top: ${rhythm(-0.5)};
`;

const PostNav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BlogTemplate = ({ data, pageContext }) => {
  const { previous, next } = pageContext;
  const post = data.markdownRemark;
  const { featuredImage } = post.frontmatter;

  return (
    <Layout cover={
      <FeaturedImage fluid={featuredImage ? featuredImage.childImageSharp.fluid : null} />
      }
    >
      <Seo title={post.frontmatter.title} description={post.excerpt} />
      <Title>
        {post.frontmatter.title}
        {post.frontmatter.subtitle && (<p>{post.frontmatter.subtitle}</p>)}
      </Title>
      <Date>{post.frontmatter.date}</Date>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Bio />
      <PostNav>
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ←
              {' '}
              {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title}
              {' '}
              →
            </Link>
          )}
        </li>
      </PostNav>
    </Layout>
  );
};

BlogTemplate.propTypes = {
  data: shape({}).isRequired,
  pageContext: shape({}).isRequired,
};

export default BlogTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1440) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
/* eslint-enable react/no-danger */
