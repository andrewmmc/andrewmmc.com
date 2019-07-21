/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import darken from 'polished/lib/color/darken';

import Icon from 'components/Icon';
import Layout from 'components/Layout';
import Seo from 'components/Seo';

import { gray } from 'utils/color';
import { scale } from 'utils/typography';
import {
  Info, Nav, Article, Content,
} from './styles';

const Stack = styled.div`
  display: flex;
  align-items: center;
`;

const List = styled.div`
  display: inline-block;
  color: ${gray};
  
  svg {
    margin-right: 1rem;
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

const PortfolioTemplate = ({ data, pageContext }) => {
  const { previous, next } = pageContext;
  const post = data.markdownRemark;
  const {
    tags, title, date, link, linkLabel,
  } = post.frontmatter;

  return (
    <Layout>
      <Seo title={title} description={post.excerpt} />
      <Article>
        <header>
          <h1>
            {title}
          </h1>
          <Info>
            <time>{date}</time>
          </Info>
        </header>
        <Stack>
          {tags && (
          <List>
            {tags.map(tag => <Icon key={tag} size={36} type={tag} title={`${tag.charAt(0).toUpperCase()}${tag.substr(1)}`} />)}
          </List>
          )}
          {link && <Landing href={link} target="_blank" rel="noopener noreferrer">{linkLabel || 'Visit'}</Landing>}
        </Stack>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </Article>
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
