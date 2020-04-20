/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Iframe from 'iframe-resizer-react';

import Bio from 'components/Bio';
import Layout from 'components/Layout';
import Seo from 'components/Seo';

import { Info, Nav, Article, Content } from './styles';

const BlogTemplate = ({ data, pageContext }) => {
  const { siteUrl } = data.site.siteMetadata;
  const { previous, next } = pageContext;
  const post = data.markdownRemark;
  const { title, date } = post.frontmatter;
  const { readingTime } = post.fields;

  return (
    <Layout>
      <Seo
        title={title}
        description={post.excerpt}
        canonical={post.frontmatter.canonical}
      />
      <Article>
        <header>
          <h1>{title}</h1>
          <Info>
            <time>{date}</time>
            <span>{readingTime.text}</span>
          </Info>
        </header>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<div id="917526292"><script type="text/javascript">try {window._mNHandle.queue.push(function (){window._mNDetails.loadTag("917526292", "300x250", "917526292");});}catch (error) {}</script></div>',
          }}
        />
      </Article>
      <StyledIframe
        src={`https://button.like.co/in/embed/andrewmmc/button?type=wp&referrer=${siteUrl}${post.fields.slug}`}
        inPageLinks
        checkOrigin={['https://button.like.co']}
      />
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
  location: shape({}).isRequired,
};

export default BlogTemplate;

const StyledIframe = styled(Iframe)`
  border: none;
  margin: 0;
`;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
        readingTime {
          text
        }
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        canonical
      }
    }
  }
`;
/* eslint-enable react/no-danger */
