/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { rhythm, scale } from '../utils/typography';

const CoverImage = styled.div`
  width: 100%;
  height: 350px;
  background-color: #eeeeee;
  margin-bottom: ${rhythm(1)};
`;

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

  return (
    <Layout cover={<CoverImage />}>
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
      }
    }
  }
`;
/* eslint-enable react/no-danger */
