import React from 'react';
import { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import FeaturedImage from '../components/FeaturedImage';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import { rhythm } from '../utils/typography';

import GitHubLogo from '../../content/assets/logo/github.svg';
import LinkedinLogo from '../../content/assets/logo/linkedin.svg';
import MediumLogo from '../../content/assets/logo/medium.svg';
import VscoLogo from '../../content/assets/logo/vsco.svg';

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: ${rhythm(1)};
  
  a {
    color: rgba(0, 0, 0, 0.8);

    &:hover,
    &:focus, 
    &:active {
      color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const Icon = styled.svg`
  width: 40px;
  height: 40px;
  fill: currentColor;
`;

const Contact = ({ data }) => {
  const { email, social } = data.site.siteMetadata;
  return (
    <Layout cover={<FeaturedImage fluid={data.cover.childImageSharp.fluid} />}>
      <Seo title="Contact" />
      <h1>Contact</h1>
      <div>
        <p>
          To know more about me, please visit
          {' '}
          <Link to="/about">About</Link>
          {' '}
          or
          {' '}
          <Link to="/portfolio">Portfolio</Link>
          {' '}
          for my previous works.
          Some works are not listed on this website. Please contact me if you are interested.
        </p>
        <ul>
          <li>
            Email:
            {' '}
            <a href={`mailto:${email}`}>{email}</a>
          </li>
        </ul>
        <p>
          I am also active on the following:
          <SocialMediaContainer>
            <a href={`https://github.com/${social.github}`} target="_blank" rel="noopener noreferrer">
              <Icon as={GitHubLogo} />
            </a>
            <a href={`https://linkedin.com/in/${social.linkedin}`} target="_blank" rel="noopener noreferrer">
              <Icon as={LinkedinLogo} />
            </a>
            <a href={`https://medium.com/@${social.medium}`} target="_blank" rel="noopener noreferrer">
              <Icon as={MediumLogo} />
            </a>
            <a href={`https://vsco.co/${social.vsco}`} target="_blank" rel="noopener noreferrer">
              <Icon as={VscoLogo} />
            </a>
          </SocialMediaContainer>
        </p>
        <p>
          I promise to keep your personal details private and only send you emails that related
          to your requests.
        </p>
      </div>
    </Layout>
  );
};
Contact.propTypes = {
  data: shape({}).isRequired,
};

export default Contact;

export const pageQuery = graphql`
  query {
      cover: file(relativePath: { eq: "assets/contact.jpg" }) {
          childImageSharp {
              fluid(quality: 90, maxWidth: 1440) {
                  ...GatsbyImageSharpFluid_withWebp
              }
          }
      }
      site {
          siteMetadata {
              author
              email
              social {
                  github
                  linkedin
                  medium
                  vsco
              }
          }
      }
  }
`;
