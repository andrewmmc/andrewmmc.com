import React from 'react';
import { renderToString } from 'react-dom/server';
import { shape, func } from 'prop-types';
import fromDom from 'hast-util-from-dom';

import { PostTemplate } from 'gatsby-theme-minimalism/src/templates/post';

const PostPreview = ({ entry, widgetFor }) => {
  const body = widgetFor('body');
  const bodyString = renderToString(body);
  const hast = fromDom(bodyString);
  return (
    <PostTemplate
      title={entry.getIn(['data', 'title'])}
      category={entry.getIn(['data', 'category'])}
      date={entry.getIn(['data', 'date'])}
      content={hast}
    />
  );
};

PostPreview.propTypes = {
  entry: shape({
    getIn: func,
  }),
  widgetFor: func,
};

export default PostPreview;
