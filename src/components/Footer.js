import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faTwitter,
  faFacebook,
  faInstagram,
  faLinkedin,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';

import { MAX_WIDTH } from 'utils/helpers';

const Footer = props => {
  const data = useStaticQuery(pageQuery);
  const { social } = data.site.siteMetadata;
  const { github, linkedin, facebook, instagram, twitter, medium } = social;

  return (
    <Container {...props}>
      <div>© 2020</div>
      <SocialMedia>
        <a href={`/rss.xml`} target="_blank" rel="noopener noreferrer">
          <Icon icon={faRss} />
          <span className="visually-hidden">RSS</span>
        </a>
        {github && (
          <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={faGithub} />
            <span className="visually-hidden">GitHub</span>
          </a>
        )}
        {twitter && (
          <a
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={faTwitter} />
            <span className="visually-hidden">Twitter</span>
          </a>
        )}
        {facebook && (
          <a
            href={`https://facebook.com/${facebook}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={faFacebook} />
            <span className="visually-hidden">Facebook</span>
          </a>
        )}
        {instagram && (
          <a
            href={`https://instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={faInstagram} />
            <span className="visually-hidden">Instagram</span>
          </a>
        )}
        {linkedin && (
          <a
            href={`https://linkedin.com/in/${linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={faLinkedin} />
            <span className="visually-hidden">Linkedin</span>
          </a>
        )}
        {medium && (
          <a
            href={`https://medium.com/${medium}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={faMedium} />
            <span className="visually-hidden">Medium</span>
          </a>
        )}
      </SocialMedia>
    </Container>
  );
};

const Container = styled.footer`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: ${MAX_WIDTH}rem;
  padding: 0 1rem;
  margin: 0 auto;
  color: ${({ theme }) => rgba(theme.colors.primaryText, 0.8)};
`;

const SocialMedia = styled.div`
  font-size: 1.25rem;
  display: flex;
  justify-content: flex-end;

  a {
    width: 50px;
    height: 100%;
    display: inline-block;
    padding: 0 1rem;
    color: ${({ theme }) => rgba(theme.colors.primaryText, 0.8)};
    border-bottom: none;

    &:hover,
    &:focus,
    &:active {
      color: ${({ theme }) => rgba(theme.colors.primaryText, 0.9)};
      background: none;
      border-bottom: none;
    }
  }

  span.visually-hidden {
    display: none;
  }
`;

export default Footer;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        social {
          github
          linkedin
          facebook
          instagram
          twitter
          medium
        }
      }
    }
  }
`;
