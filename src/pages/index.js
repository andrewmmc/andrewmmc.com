/* eslint-disable react/no-danger */
import React from 'react';
import { shape } from 'prop-types';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import media from 'styled-media-query';
import rgba from 'polished/lib/color/rgba';

import Layout from 'components/Layout';
import Seo from 'components/Seo';
import Thumbnail from 'components/Thumbnail';

import { black } from 'utils/color';
import { rhythm, scale } from 'utils/typography';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -${rhythm(0.75)};
`;

export const Card = styled.div`
  flex: 0 100%;
  padding: ${rhythm(0.5)} ${rhythm(0.75)};
  
  & >div {
    padding-top: ${rhythm(0.75)};
  }
  
  small {
    color: ${rgba(black, 0.7)};
  }
  
  h3 {
    ${scale(0.5)};
    margin: 0 0 ${rhythm(0.7)} 0;
    font-weight: 600;
  }

  ${media.greaterThan('small')`
    flex: 0 50%;
    padding: ${rhythm(0.75)};
  `}
`;

export const StyledThumbnail = styled(Thumbnail)`
  transition: 0.3s;
    &:hover, &:focus {
      transform: translateY(-2px);
      box-shadow: 0 0.8em 2em ${rgba(black, 0.05)};
    }
`;

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Seo keywords={['blog', 'andrew', 'andrewmok']} />
      <Container>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          const { featuredImage, date } = node.frontmatter;
          return (
            <Card key={node.fields.slug}>
              <Link to={node.fields.slug}>
                {featuredImage
                  ? <StyledThumbnail fluid={featuredImage.childImageSharp.fluid} auto />
                  : <StyledThumbnail auto />
                }
              </Link>
              <div>
                <small>{date}</small>
                <h3>
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            </Card>
          );
        })}
      </Container>
    </Layout>
  );
};

BlogIndex.propTypes = {
  data: shape({}).isRequired,
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fields: { type: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt (truncate: true)
          fields {
            slug
            type
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            featuredImage {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 1280) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
          }
        }
      }
    }
  }
`;
/* eslint-enable react/no-danger */
