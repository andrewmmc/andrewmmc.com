import React from 'react';
import { shape, string, node, arrayOf } from 'prop-types';
import { graphql } from 'gatsby';
import Feedback from 'components/Feedback';
import Layout from 'components/Layout';
import Seo from 'components/Seo';
import PostTemplate from 'components/PostTemplate';

const Blog = ({ data, pageContext }) => {
  const { siteUrl } = data.site.siteMetadata;
  const { previous, next, isShowFeedback } = pageContext;
  const post = data.markdownRemark;
  const { title, date } = post.frontmatter;
  const postCategory = post.frontmatter.category || [];
  const { slug } = post.fields;

  return (
    <Layout>
      <Seo
        title={title}
        description={post.excerpt}
        canonical={post.frontmatter.canonical}
      />
      {/* <PostTemplate
        title={title}
        date={date}
        category={postCategory}
        content={post.htmlAst}
        feedback={
          isShowFeedback ? <Feedback siteUrl={siteUrl} slug={slug} /> : null
        }
        previous={previous}
        next={next}
      /> */}
    </Layout>
  );
};

Blog.propTypes = {
  data: shape({}).isRequired,
  pageContext: shape({}).isRequired,
};

export default Blog;

export const pageQuery = graphql`
  query PostBySlug($id: String!, $dateFormat: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    prismicBlogPost(id: { eq: $id }) {
      id
      url
      data {
        title {
          text
        }
        date(formatString: $dateFormat)
        body {
          __typename
          ... on PrismicBlogPostBodyCode {
            id
            items {
              code {
                text
              }
              file_name {
                text
              }
              language {
                text
              }
            }
          }
          ... on PrismicBlogPostBodyContent {
            id
            items {
              rich_text_content {
                html
              }
              rich_text_title {
                text
              }
            }
          }
        }
      }
    }
  }
`;

// markdownRemark(fields: { slug: { eq: $slug } }) {
//   id
//   excerpt(truncate: true)
//   htmlAst
//   fields {
//     slug
//     readingTime {
//       text
//     }
//   }
//   frontmatter {
//     title
//     date(formatString: $dateFormat)
//     category
//   }
// }
