/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import Layout from 'components/Layout';
import Seo from 'components/Seo';
import Thumbnail from 'components/Thumbnail';

const Projects = ({ data }) => {
  const { group } = data.allMarkdownRemark;
  const reversedGroup = [...group].reverse();
  return (
    <Layout
      cover={<Thumbnail fluid={data.featuredImage.childImageSharp.fluid} />}
    >
      <Seo
        title="Projects"
        keywords={[
          'projects',
          'andrew',
          'andrewmok',
          'frontend',
          'javascript',
        ]}
      />
      <Main>
        <h1>Projects</h1>
        <p>I like to create different applications to make life easier. Check below for some of my works and open-sourced projects.</p>
        {reversedGroup.map(({ nodes, fieldValue: year }) => {
          return (
            <YearSection key={year}>
              <SubHeading>{year}</SubHeading>
              <List>
                {nodes.map(node => {
                  const { title, link, description } = node.frontmatter;
                  const { slug } = node.fields;
                  return (
                    <Item key={slug}>
                      <Title><Link to={slug}>{title}</Link>{description && ` • ${description}`}</Title>
                      <Hyperlink>
                        {link && (
                          <a href={link} target="_blank" rel="noopener noreferrer">
                            <Icon icon={faExternalLinkAlt} />
                          </a>
                        )}
                      </Hyperlink>
                    </Item>
                  )
                })}
              </List>
            </YearSection>
          );
        })}
      </Main>
    </Layout>
  );
};

Projects.propTypes = {
  data: shape({}).isRequired,
};

const Main = styled.div`
  margin: 2rem 0;
`;

const YearSection = styled.div`
  margin: 0 0 1rem;
`;

const SubHeading = styled.h3`
  margin: 0 0 0.5rem;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  margin: 0.3rem 0;

  p {
    margin: 0;
  }
`;

const Title = styled.div`
  flex: 1 0 90%;
`;

const Hyperlink = styled.div`
  flex: 1 0 10%;
  display: flex;
  justify-content: flex-end;

  a, a:hover, a:focus, a:active {
    display: inline-block;
    border: none;
    padding: 0 1rem;
    width: 50px;
    height: 100%;
    background: none;
  }
`;

export default Projects;

export const pageQuery = graphql`
  query {
    featuredImage: file(relativePath: { eq: "assets/projects.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allMarkdownRemark(filter: {fields: {type: {eq: "projects"}}}, sort: {fields: [frontmatter___date], order: DESC}) {
      group(field: frontmatter___year) {
        nodes {
          frontmatter {
            title
            link
            description
          }
          fields {
            slug
            type
          }
        }
        totalCount
        fieldValue
      }
    }
  }  
`;
/* eslint-enable react/no-danger */
