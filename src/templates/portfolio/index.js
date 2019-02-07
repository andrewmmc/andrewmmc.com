/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import darken from 'polished/lib/color/darken';

import Icon from 'components/Icon';
import Layout from 'components/Layout';
import Seo from 'components/Seo';

import { gray, black } from 'utils/color';
import { rhythm, scale } from 'utils/typography';

const Info = styled.div`
  ${scale(0.2)};
  display: flex;
  margin: ${rhythm(-0.5)} 0 ${rhythm(0.5)} 0;
  
  span:first-child {
    display: inline-block;
    margin-right: ${rhythm(1)};
  }
`;

const Tech = styled.div`
  display: flex;
  align-items: center;
`;

const Tags = styled.div`
  display: inline-block;
  color: ${gray};
  
  svg {
    margin-right: ${rhythm(0.5)};
  }
`;

const Landing = styled.a`
  ${scale(-0.2)};
  font-weight: normal;
  padding: 0.1em 0.8em;
  margin: 0 0 6px 2px; // visual adjustment
  border: 1px solid ${gray};
  border-radius: 3px;
  color: ${gray};
  
  &:hover,
  &:focus, 
  &:active {
    border-color: ${darken(0.1, gray)};
    color: ${darken(0.1, gray)};
  }
`;

const Article = styled.article`
  margin: ${rhythm(1)} 0;
  
  p {
    span.gatsby-resp-image-wrapper {
      margin: ${rhythm(2)};
      box-shadow: 0 0.8em 2em ${rgba(black, 0.05)};
    }
  }
`;

const Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin: ${rhythm(2)} 0;
  list-style: none;
`;

const PortfolioTemplate = ({ data, pageContext }) => {
  const { previous, next } = pageContext;
  const post = data.markdownRemark;
  const {
    tags, title, date, link, linkLabel,
  } = post.frontmatter;

  return (
    <Layout>
      <Seo title={title} description={post.excerpt} />
      <h1>
        {title}
      </h1>
      <Info>
        <span>{date}</span>
      </Info>
      <Tech>
        {tags && (
          <Tags>
            {tags.map(tag => <Icon key={tag} size={36} type={tag} title={`${tag.charAt(0).toUpperCase()}${tag.substr(1)}`} />)}
          </Tags>
        )}
        {link && <Landing href={link} target="_blank" rel="noopener noreferrer">{linkLabel || 'Visit'}</Landing>}
      </Tech>
      <Article dangerouslySetInnerHTML={{ __html: post.html }} />
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
        date(formatString: "MMMM YYYY")
        tags
        link
        linkLabel
      }
    }
  }
`;
/* eslint-enable react/no-danger */
