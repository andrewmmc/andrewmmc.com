import React, { Fragment } from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';
import Content from 'components/Content';
import Layout from 'components/Layout';
import Seo from 'components/Seo';
import PostTemplate from 'components/PostTemplate';
import { ellipsis } from 'utils/index';

const About = ({ data }) => {
  const { content, title, body } = data.prismicAbout.data;
  const postContent = (
    <>
      <Content html={content.html} />
      {body.map(({ __typename, id, items }) => {
        switch (__typename) {
          case 'PrismicAboutBodyRecommendations': {
            return (
              <Fragment key={`${id}_PrismicAboutBodyRecommendations`}>
                <Content html="Recommendations" wrappedTag="h2" />
                {items.map(({ quote }, index) => {
                  return (
                    <Content
                      // eslint-disable-next-line react/no-array-index-key
                      key={`${id}_PrismicAboutBodyRecommendations_quote_${index}`}
                      html={quote.html}
                      wrappedTag="blockquote"
                    />
                  );
                })}
              </Fragment>
            );
          }
          default:
            return null;
        }
      })}
    </>
  );

  return (
    <Layout>
      <Seo title={title.text} description={ellipsis(content.text)} />
      <PostTemplate title={title.text} content={postContent} />
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
