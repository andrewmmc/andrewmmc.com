import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import { MAX_WIDTH } from 'utils/helpers';

const Footer = props => {
  const data = useStaticQuery(pageQuery);
  const { social } = data.site.siteMetadata;
  const { github, linkedin, medium, twitter } = social;
  return (
    <Container {...props}>
      <div>© 2020</div>
      <SocialMedia>
        <a
          href={`https://github.com/${github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={faGithub} />
          <span className="visually-hidden">GitHub</span>
        </a>
        <a
          href={`https://twitter.com/@${twitter}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={faTwitter} />
          <span className="visually-hidden">Twitter</span>
        </a>
        <a
          href={`https://linkedin.com/in/${linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={faLinkedin} />
          <span className="visually-hidden">Linkedin</span>
        </a>
        <a
          href={`https://medium.com/${medium}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon icon={faMedium} />
          <span className="visually-hidden">Medium</span>
        </a>
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
        social {
          github
          linkedin
          medium
          twitter
        }
      }
    }
  }
`;
