import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { MAX_WIDTH } from 'utils/helpers';

class Footer extends Component {
  render() {
    return (
      <StaticQuery
        query={query}
        render={data => {
          const { social } = data.site.siteMetadata;
          const { github, linkedin, medium, twitter } = social;
          return (
            <Container {...this.props}>
              <div>
                © 2020
              </div>
              <SocialMedia>
                <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer">
                  <Icon icon={faGithub} />
                </a>
                <a href={`https://twitter.com/@${twitter}`} target="_blank" rel="noopener noreferrer">
                  <Icon icon={faTwitter} />
                </a>
                <a href={`https://linkedin.com/in/${linkedin}`} target="_blank" rel="noopener noreferrer">
                  <Icon icon={faLinkedin} />
                </a>
                <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer">
                  <Icon icon={faMedium} />
                </a>
              </SocialMedia>
            </Container>
          );
        }}
      />
    );
  }
}

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
`;

const query = graphql`
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

export default Footer;
