import React from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';
import { Grid } from '@chakra-ui/core';
import Card from 'components/Card';
import Heading from 'components/Heading';
import Layout from 'components/Layout';
import Seo from 'components/Seo';

const Projects = ({ data }) => {
  const posts = data.allPrismicProjectPost.edges;
  return (
    <Layout>
      <Seo title="Projects" />
      <Heading>Projects</Heading>
      <Grid
        gridTemplateColumns={['1fr', '1fr 1fr']}
        gridTemplateRows={['1fr 1fr', '1fr']}
        gap={8}
        mt={8}
      >
        {posts.map(({ node }) => {
          const title = node.data.title.text || node.url;
          const { date, featured_image } = node.data;
          return (
            <Card
              key={node.url}
              path={`/${node.url}`}
              date={date}
              title={title}
              {...(!!featured_image && {
                featuredImage: featured_image,
              })}
            />
          );
        })}
      </Grid>
    </Layout>
  );
};

Projects.propTypes = {
  data: shape({}).isRequired,
};

export default Projects;

export const pageQuery = graphql`
  query {
    allPrismicProjectPost(sort: { order: DESC, fields: data___date }) {
      edges {
        node {
          id
          url
          data {
            title {
              text
            }
            date(formatString: "YYYY")
            featured_image {
              fluid(maxWidth: 479) {
                ...GatsbyPrismicImageFluid
              }
            }
          }
          tags
        }
      }
    }
  }
`;
