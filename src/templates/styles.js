import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';
import { primary, black } from 'utils/color';

export const Info = styled.p`
  color: ${primary};
  display: flex;
  margin: 1rem 0;
  
  time {
    margin-right: 1rem;
  }
`;

export const Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

export const Article = styled.article`
  margin: 2rem 0;
`;

export const Content = styled.div`
  margin: 1rem 0;
  
  p {
    span.gatsby-resp-image-wrapper {
      margin: 2rem;
      box-shadow: 0 0.8em 2em ${rgba(black, 0.05)};
    }
  }
`;
