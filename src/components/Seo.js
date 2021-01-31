import React from 'react';
import { string, arrayOf } from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';

const Seo = ({ description, lang, meta, keywords = '', title, canonical }) => {
  const data = useStaticQuery(pageQuery);
  const metaDescription =
    description || data.prismicSettings.data.siteDescription.text;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s – ${data.prismicSettings.data.siteName.text}`}
      defaultTitle={data.prismicSettings.data.siteName.text}
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
          content: data.prismicSettings.data.authorName.text,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: [data.prismicSettings.data.seoKeywords.text, keywords].join(
            ', '
          ),
        },
      ].concat(meta)}
      link={[
        { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
        ...(canonical ? [{ rel: 'canonical', href: canonical }] : []),
      ]}
    />
  );
};

Seo.defaultProps = {
  canonical: undefined,
  description: '',
  lang: 'en',
  meta: [],
  keywords: '',
  title: '',
};

Seo.propTypes = {
  canonical: string,
  description: string,
  lang: string,
  meta: arrayOf(string),
  keywords: string,
  title: string,
};

export default Seo;

const pageQuery = graphql`
  query DefaultSEOQuery {
    prismicSettings(uid: { eq: "settings" }) {
      data {
        siteName: site_name {
          text
        }
        siteDescription: site_description {
          text
        }
        authorName: author_name {
          text
        }
        seoKeywords: seo_keywords {
          text
        }
      }
    }
  }
`;
