/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { rgba } from 'polished';

import Bio from '../../components/Bio';
import FeaturedImage from '../../components/FeaturedImage';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import { gray } from '../../utils/color';
import { BLOG_TAGS_PATH, toKebabCase } from '../../utils/helper';
import { rhythm, scale } from '../../utils/typography';

const Title = styled.h1`
  p {
    ${scale(0.5)};
    font-weight: 500;
    margin-top: ${rhythm(0.5)};
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${rhythm(-0.5)} 0 ${rhythm(1)} 0;
`;

const Date = styled.p`
  ${scale(0.2)};
  display: inline-block;
  margin: 0;
`;

const PostTags = styled.div`
  a {
    ${scale(-0.4)};
    margin: 0 0.5em;
    
    border: 1px solid ${rgba(gray, 0.5)};
    border-radius: 3em;
    padding: 0.2em 0.8em;
    color: ${rgba(gray, 0.5)};
    
    &:hover,
    &:focus, 
    &:active {
      border-color: ${rgba(gray, 0.7)};
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
  const {
    featuredImage, tags, title, subtitle, date,
  } = post.frontmatter;
  const { readingTime } = post.fields;

  return (
    <Layout
      cover={<FeaturedImage fluid={featuredImage ? featuredImage.childImageSharp.fluid : null} />}
    >
      <Seo title={title} description={post.excerpt} />
      <Title>
        {title}
        {subtitle && (<p>{subtitle}</p>)}
      </Title>
      <InfoContainer>
        <Date>
          {date} /
          <span>{readingTime.text}</span>
        </Date>
      </InfoContainer>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      {tags && (
        <PostTags>
          {tags.map(tag => (
            <Link key={tag} to={`${BLOG_TAGS_PATH}${toKebabCase(tag)}/`}>{tag}</Link>
          ))}
        </PostTags>
      )}
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
