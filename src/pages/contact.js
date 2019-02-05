import React from 'react';
import { shape } from 'prop-types';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { rgba } from 'polished';

import FeaturedImage from '../components/FeaturedImage';
import Icon from '../components/Icon';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

import { black } from '../utils/color';
import { rhythm } from '../utils/typography';

const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: ${rhythm(1)};
  
  a {
    color: ${rgba(black, 0.8)};

    &:hover,
    &:focus, 
    &:active {
      color: ${rgba(black, 0.9)};
    }
  }
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
        </p>
        <SocialMediaContainer>
          <a href={`https://github.com/${social.github}`} target="_blank" rel="noopener noreferrer">
            <Icon type="github" />
          </a>
          <a href={`https://linkedin.com/in/${social.linkedin}`} target="_blank" rel="noopener noreferrer">
            <Icon type="linkedin" />
          </a>
          <a href={`https://medium.com/@${social.medium}`} target="_blank" rel="noopener noreferrer">
            <Icon type="medium" />
          </a>
          <a href={`https://vsco.co/${social.vsco}`} target="_blank" rel="noopener noreferrer">
            <Icon type="vsco" />
          </a>
        </SocialMediaContainer>
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
