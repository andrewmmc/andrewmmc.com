/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Icon from '../../components/Icon';
import Layout from '../../components/Layout';
import Seo from '../../components/Seo';

import { gray } from '../../utils/color';
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
  margin: ${rhythm(-0.5)} 0 ${rhythm(0.5)} 0;
  
  span:first-child {
    display: inline-block;
    margin-right: ${rhythm(1)};
  }
`;

const Tags = styled.div`
  color: ${gray};
  
  svg:not(:last-child) {
    margin-right: ${rhythm(0.5)};
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

const PortfolioTemplate = ({ data, pageContext }) => {
  const { previous, next } = pageContext;
  const post = data.markdownRemark;
  const { tags, title, date } = post.frontmatter;

  return (
    <Layout>
      <Seo title={title} description={post.excerpt} />
      <Title>
        {title}
      </Title>
      <Info>
        <span>{date}</span>
      </Info>
      {tags && (
        <Tags>
          {tags.map(tag => <Icon key={tag} size={36} type={tag} />)}
        </Tags>
      )}
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
      }
    }
  }
`;
/* eslint-enable react/no-danger */
