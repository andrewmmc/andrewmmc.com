/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import media from 'styled-media-query';
import { rgba } from 'polished';

import Bio from 'components/Bio';
import Layout from 'components/Layout';
import Seo from 'components/Seo';
import Thumbnail from 'components/Thumbnail';

import { lightGray, gray } from 'utils/color';
import { rhythm, scale } from 'utils/typography';

const BLOG_TAGS_PATH = '/blog/tags/';

const Title = styled.h1`
  p {
    ${scale(0.5)};
    margin-top: ${rhythm(0.5)};
  }
`;

const Info = styled.div`
  display: flex;
  margin: ${rhythm(-0.7)} 0 ${rhythm(0.3)} 0;
  
  span:first-child {
    margin-right: ${rhythm(1)};
  }
  
  ${media.greaterThan('small')`
    ${scale(0.2)};
    margin: ${rhythm(-0.5)} 0 ${rhythm(0.5)} 0;
  `}
`;

const Tags = styled.div`
  a {
    ${scale(-0.4)};
    margin: 0 0.5em;
    padding: 0.2em 0.8em;
    background-color: ${lightGray};
    color: ${rgba(gray, 0.5)};
    
    &:hover,
    &:focus, 
    &:active {
      color: ${rgba(gray, 0.7)};
    }
    
    &:first-child {
      margin-left: 0;
    }
    
    &:last-child {
      margin-right: 0;
    }
  }
`;

const Article = styled.article`
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
  const {
    featuredImage, tags, title, subtitle, date,
  } = post.frontmatter;
  const { readingTime } = post.fields;

  return (
    <Layout
      cover={featuredImage
        && <Thumbnail fluid={featuredImage.childImageSharp.fluid} />
      }
    >
      <Seo title={title} description={post.excerpt} />
      <Title>
        {title}
        {subtitle && (<p>{subtitle}</p>)}
      </Title>
      <Info>
        <span>{date}</span>
        <span>{readingTime.text}</span>
      </Info>
      {tags && (
        <Tags>
          {tags.map(tag => (
            <Link key={tag} to={`${BLOG_TAGS_PATH}${tag}/`}>{tag}</Link>
          ))}
        </Tags>
      )}
      <Article dangerouslySetInnerHTML={{ __html: post.html }} />
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
        subtitle
        date(formatString: "MMMM DD, YYYY")
        tags
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
