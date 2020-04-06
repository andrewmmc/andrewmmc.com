/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';

import Bio from 'components/Bio';
import Layout from 'components/Layout';
import Seo from 'components/Seo';

import { Info, Nav, Article, Content } from './styles';

const BlogTemplate = ({ data, pageContext }) => {
  const { previous, next } = pageContext;
  const post = data.markdownRemark;
  const { title, date } = post.frontmatter;
  const { readingTime } = post.fields;

  return (
    <Layout>
      <Seo title={title} description={post.excerpt} />
      <Article>
        <header>
          <h1>{title}</h1>
          <Info>
            <time>{date}</time>
            <span>{readingTime.text}</span>
          </Info>
        </header>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </Article>
      <Bio />
      <Nav>
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
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
