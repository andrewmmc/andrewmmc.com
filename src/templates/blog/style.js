import { Link } from 'gatsby';
import styled from 'styled-components';
import rgba from 'polished/lib/color/rgba';

import { black } from '../../utils/color';
import { rhythm, scale } from '../../utils/typography';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${rhythm(0.75)};
`;

export const Card = styled.div`
  flex: 0 50%;
  padding: ${rhythm(0.75)};
  
  div {
    padding-top: ${rhythm(0.75)};
  }
  
  small {
    color: ${rgba(black, 0.7)};
  }

  h3 {
    ${scale(0.5)};
    margin: 0 0 ${rhythm(0.5)} 0;
    font-weight: 600;
  }
`;

export const ThumbnailLink = styled(Link)`
  &>div {
    transition: 0.5s;
    &:hover, &:focus {
      transform: translateY(-2px);
      box-shadow: 0 0.8em 2em ${rgba(black, 0.05)};
    }
  }
`;
