import React from 'react';
import { number, string } from 'prop-types';
import styled from 'styled-components';

import Android from './icons/Android';
import Angular from './icons/Angular';
import Code from './icons/Code';
import Codeigniter from './icons/Codeigniter';
import Css3 from './icons/Css3';
import Database from './icons/Database';
import Git from './icons/Git';
import GitHub from './icons/Github';
import Html5 from './icons/Html5';
import Illustrator from './icons/Illustrator';
import Ios from './icons/Ios';
import Java from './icons/Java';
import Jquery from './icons/Jquery';
import Laravel from './icons/Laravel';
import Lightroom from './icons/Lightroom';
import Linkedin from './icons/Linkedin';
import Medium from './icons/Medium';
import Mysql from './icons/Mysql';
import Nodejs from './icons/Nodejs';
import Photostop from './icons/Photoshop';
import Php from './icons/Php';
import Python from './icons/Python';
import Reactjs from './icons/Reactjs';
import Swift from './icons/Swift';
import Unity from './icons/Unity';
import Vsco from './icons/Vsco';
import Vue from './icons/Vue';
import Wordpress from './icons/Wordpress';

const StyledIcon = styled.svg`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  fill: currentColor;
`;

const icons = {
  android: Android,
  angular: Angular,
  code: Code,
  codeigniter: Codeigniter,
  css3: Css3,
  database: Database,
  git: Git,
  github: GitHub,
  html5: Html5,
  illustrator: Illustrator,
  ios: Ios,
  java: Java,
  jquery: Jquery,
  laravel: Laravel,
  lightroom: Lightroom,
  linkedin: Linkedin,
  medium: Medium,
  mysql: Mysql,
  nodejs: Nodejs,
  photoshop: Photostop,
  php: Php,
  python: Python,
  reactjs: Reactjs,
  swift: Swift,
  unity: Unity,
  vsco: Vsco,
  vue: Vue,
  wordpress: Wordpress,
};

const Icon = ({ type, size, ...props }) => {
  const Comp = icons[type];
  return <StyledIcon as={Comp} size={size} {...props} />;
};

Icon.propTypes = {
  size: number,
  type: string.isRequired,
};

Icon.defaultProps = {
  size: 40,
};

export default Icon;
