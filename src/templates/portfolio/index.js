/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
// import { rgba } from 'polished';
//
// import Bio from '../../components/Bio';
// import FeaturedImage from '../../components/FeaturedImage';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import { rhythm, scale } from '../../utils/typography';

const Title = styled.h1`
  p {
    ${scale(0.5)};
    font-weight: 500;
    margin-top: ${rhythm(0.5)};
  }
`;

const Info = styled.div`
  ${scale(0.2)};
  display: flex;
  margin: ${rhythm(-0.5)} 0 ${rhythm(1)} 0;
  
  span:first-child {
    display: inline-block;
    margin-right: ${rhythm(1)};
  }
`;

const Tags = styled.div`
  span {
    display: inline-block;
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

const PortfolioTemplate = ({ data, pageContext }) => {
  const { previous, next } = pageContext;
  const post = data.markdownRemark;
  const {
    featuredImage, tags, title, date,
  } = post.frontmatter;

  return (
    <Layout>
      <Seo title={title} description={post.excerpt} />
      <Title>
        {title}
      </Title>
      <Info>
        <span>{date}</span>
      </Info>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      {tags && (
        <Tags>
          {tags.map(tag => (<span>{ tag }</span>))}
        </Tags>
      )}
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

PortfolioTemplate.propTypes = {
  data: shape({}).isRequired,
  pageContext: shape({}).isRequired,
};

export default PortfolioTemplate;

export const pageQuery = graphql`
  query PortfolioPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MM YYYY")
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
