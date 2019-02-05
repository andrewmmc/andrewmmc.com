import React from 'react';
import { number, string } from 'prop-types';
import styled from 'styled-components';

import Android from '../../content/assets/icons/android.svg';
import Angular from '../../content/assets/icons/angular.svg';
import Code from '../../content/assets/icons/code.svg';
import Codeigniter from '../../content/assets/icons/codeigniter.svg';
import Css3 from '../../content/assets/icons/css3.svg';
import Database from '../../content/assets/icons/database.svg';
import Git from '../../content/assets/icons/git.svg';
import GitHub from '../../content/assets/icons/github.svg';
import Html5 from '../../content/assets/icons/html5.svg';
import Illustrator from '../../content/assets/icons/illustrator.svg';
import Ios from '../../content/assets/icons/ios.svg';
import Java from '../../content/assets/icons/java.svg';
import Jquery from '../../content/assets/icons/jquery.svg';
import Laravel from '../../content/assets/icons/laravel.svg';
import Lightroom from '../../content/assets/icons/lightroom.svg';
import Linkedin from '../../content/assets/icons/linkedin.svg';
import Medium from '../../content/assets/icons/medium.svg';
import Mysql from '../../content/assets/icons/mysql.svg';
import Nodejs from '../../content/assets/icons/nodejs.svg';
import Photostop from '../../content/assets/icons/photoshop.svg';
import Php from '../../content/assets/icons/php.svg';
import Python from '../../content/assets/icons/python.svg';
import Reactjs from '../../content/assets/icons/reactjs.svg';
import Swift from '../../content/assets/icons/swift.svg';
import Unity from '../../content/assets/icons/unity.svg';
import Vsco from '../../content/assets/icons/vsco.svg';
import Vue from '../../content/assets/icons/vue.svg';
import Wordpress from '../../content/assets/icons/wordpress.svg';

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
