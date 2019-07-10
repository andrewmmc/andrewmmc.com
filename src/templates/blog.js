/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Bio from 'components/Bio';
import Layout from 'components/Layout';
import Seo from 'components/Seo';

import { primary } from 'utils/color';
import { rhythm } from 'utils/typography';

const Info = styled.p`
  color: ${primary};
  display: flex;
  margin: 1rem 0;
  
  time {
    margin-right: 1rem;
  }
`;

const Content = styled.div`
  margin: ${rhythm(1)} 0;
`;

const Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: ${rhythm(2)} 0;
`;

const BlogTemplate = ({ data, pageContext }) => {
  const { previous, next } = pageContext;
  const post = data.markdownRemark;
  const { title, date } = post.frontmatter;
  const { readingTime } = post.fields;

  return (
    <Layout>
      <Seo title={title} description={post.excerpt} />
      <article>
        <header>
          <h1>{title}</h1>
          <Info>
            <time>{date}</time>
            <span>{readingTime.text}</span>
          </Info>
        </header>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <Bio />
      <Nav>
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
      </Nav>
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
      fields {
          readingTime {
              text
          }
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
/* eslint-enable react/no-danger */
