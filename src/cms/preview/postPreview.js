import React from 'react';
import { shape, func } from 'prop-types';
import styled from '@emotion/styled';

import { PostTemplate } from 'gatsby-theme-minimalism/src/templates/post';

const PostPreview = ({ entry, widgetFor }) => {
  const body = widgetFor('body');
  return (
    <PostTemplate
      title={entry.getIn(['data', 'title'])}
      category={entry.getIn(['data', 'category'])}
      date={entry.getIn(['data', 'date'])}
      content={<StyledBody>{body}</StyledBody>}
      isHTMLContent={false}
    />
  );
};

PostPreview.propTypes = {
  entry: shape({
    getIn: func,
  }),
  widgetFor: func,
};

// Temp solution for poor support on Preview
// https://github.com/netlify/netlify-cms/issues/793
const StyledBody = styled(div)`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

  img {
    max-width: 100%;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.25;
    font-weight: 700;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }

  p {
    line-height: 1.625;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.75rem;
  }

  a,
  a:visited,
  a:active,
  a:focus {
    cursor: pointer;
    color: rgb(49, 130, 206);
    overflow-wrap: break-word;
    text-decoration: none;
  }
`;

export default PostPreview;
