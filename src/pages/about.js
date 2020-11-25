import React, { Fragment } from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';
import Content from 'components/Content';
import Heading from 'components/Heading';
import Layout from 'components/Layout';
import Seo from 'components/Seo';

const About = ({ data }) => {
  const { content, title, body } = data.prismicAbout.data;
  return (
    <Layout>
      <Seo
        title={title.text}
        description={`${content.text.substring(0, 100)}...`}
      />
      <Heading>{title.text}</Heading>
      <Content html={content.html} />
      {body.map((slice) => {
        const { __typename, id, items } = slice;
        if (__typename === 'PrismicAboutBodyRecommendations') {
          return (
            <Fragment>
              <Content html="Recommendations" wrappedTag="h2" />
              {items.map(({ quote }, index) => {
                return (
                  <Content
                    key={`${id}_items_quote_${index}`}
                    html={quote.html}
                    wrappedTag="blockquote"
                  />
                );
              })}
            </Fragment>
          );
        }
        return null;
      })}
    </Layout>
  );
};

About.propTypes = {
  data: shape({}).isRequired,
};

export default About;

export const pageQuery = graphql`
  query {
    prismicAbout(uid: { eq: "about" }) {
      data {
        content {
          html
          text
        }
        title {
          text
        }
        body {
          __typename
          ... on PrismicAboutBodyRecommendations {
            id
            items {
              quote {
                html
              }
            }
          }
        }
      }
    }
  }
`;
