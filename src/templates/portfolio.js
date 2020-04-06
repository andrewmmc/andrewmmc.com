/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from 'components/Layout';
import Seo from 'components/Seo';

import { Info, Article, Content } from './styles';

const PortfolioTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const { title, date, link, linkLabel } = post.frontmatter;

  return (
    <Layout>
      <Seo title={title} description={post.excerpt} />
      <Article>
        <header>
          <h1>{title}</h1>
          <Info>
            <time>{date}</time>
          </Info>
        </header>
        <Stack>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {linkLabel || 'Visit'}
            </a>
          )}
        </Stack>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </Article>
    </Layout>
  );
};

PortfolioTemplate.propTypes = {
  data: shape({}).isRequired,
};

const Stack = styled.div`
  display: flex;
  align-items: center;
`;

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
        link
        linkLabel
      }
    }
  }
`;
/* eslint-enable react/no-danger */
