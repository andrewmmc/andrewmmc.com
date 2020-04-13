import React from 'react';
import { string, arrayOf } from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';

import Favicon from '../../static/favicon.png';

const Seo = ({ canonical, description, lang, meta, keywords, title }) => {
  const data = useStaticQuery(pageQuery);
  const metaDescription = description || data.site.siteMetadata.description;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s – ${data.site.siteMetadata.title}`}
      defaultTitle={`${data.site.siteMetadata.title} – Software Developer`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: data.site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: 'keywords',
                content: keywords.join(', '),
              }
            : []
        )
        .concat(meta)}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: Favicon },
        { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
        ...canonical ? [{ rel: 'canonical', href: canonical }] : []
      ]}
    />
  );
};

Seo.defaultProps = {
  canonical: undefined,
  description: '',
  lang: 'en',
  meta: [],
  keywords: [],
  title: '',
};

Seo.propTypes = {
  canonical: string,
  description: string,
  lang: string,
  meta: arrayOf(string),
  keywords: arrayOf(string),
  title: string,
};

export default Seo;

const pageQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
