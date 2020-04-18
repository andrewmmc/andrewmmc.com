/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import Layout from 'components/Layout';
import Seo from 'components/Seo';

import { Info, Article, Content } from './styles';

const ProjectsTemplate = ({ data }) => {
  const post = data.markdownRemark;
  const { title, date, link, label } = post.frontmatter;

  return (
    <Layout>
      <Seo title={title} description={post.excerpt} />
      <Article>
        <header>
          <H1>{title}</H1>
          <Hyperlink>
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Icon icon={faExternalLinkAlt} />
              </a>
            )}
          </Hyperlink>
          <Info>
            <time>{date}</time>
          </Info>
        </header>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        <div id="917526292"></div>
      </Article>
    </Layout>
  );
};

ProjectsTemplate.propTypes = {
  data: shape({}).isRequired,
};

const H1 = styled.h1`
  display: inline-block;
  margin: 0;
`;

const Hyperlink = styled.div`
  display: inline-block;

  a,
  a:hover,
  a:focus,
  a:active {
    display: inline-block;
    border: none;
    padding: 0 1rem;
    width: 50px;
    height: 100%;
    background: none;
  }
`;

export default ProjectsTemplate;

export const pageQuery = graphql`
  query ProjectsPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM YYYY")
        link
      }
    }
  }
`;
/* eslint-enable react/no-danger */
