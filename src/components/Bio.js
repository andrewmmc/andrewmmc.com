import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={(data) => {
      const { author, location, social } = data.site.siteMetadata;
      return (
        <div
          style={{
            display: 'flex',
            marginBottom: rhythm(2.5),
          }}
        >
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author}
            style={{
              marginRight: rhythm(1 / 2),
              marginBottom: 0,
              minWidth: 50,
              borderRadius: '100%',
            }}
            imgStyle={{
              borderRadius: '50%',
            }}
          />
          <p>
            <strong>{author}</strong>
              , web developer from
            {' '}
            {location}
.  I write and I code.
            {' '}
            <a href={`https://github.com/${social.github}`}>
                Follow me on GitHub.
            </a>
          </p>
        </div>
      );
    }}
  />
);

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        location
        social {
          twitter
          github
        }
      }
    }
  }
`;

export default Bio;
