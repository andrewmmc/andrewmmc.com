import React from 'react';
import { number, string } from 'prop-types';
import styled from 'styled-components';

import Adobe from './icons/Adobe';
import Alipay from './icons/Alipay';
import Amazon from './icons/Amazon';
import Android from './icons/Android';
import Angular from './icons/Angular';
import Apple from './icons/Apple';
import AppStore from './icons/AppStore';
import Blogger from './icons/Blogger';
import Chrome from './icons/Chrome';
import Code from './icons/Code';
import Codeigniter from './icons/Codeigniter';
import Codepen from './icons/Codepen';
import Css3 from './icons/Css3';
import Database from './icons/Database';
import Dev from './icons/Dev';
import DigitalOcean from './icons/DigitalOcean';
import Docker from './icons/Docker';
import Edge from './icons/Edge';
import Facebook from './icons/Facebook';
import Firefox from './icons/Firefox';
import Flickr from './icons/Flickr';
import Git from './icons/Git';
import GitHub from './icons/GitHub';
import Gitlab from './icons/Gitlab';
import Google from './icons/Google';
import GooglePlay from './icons/GooglePlay';
import Grunt from './icons/Grunt';
import Gulp from './icons/Gulp';
import Hotjar from './icons/Hotjar';
import Html5 from './icons/Html5';
import Hubspot from './icons/Hubspot';
import Illustrator from './icons/Illustrator';
import Instagram from './icons/Instagram';
import InternetExplorer from './icons/InternetExplorer';
import Ios from './icons/Ios';
import Java from './icons/Java';
import Javascript from './icons/Javascript';
import Joomla from './icons/Joomla';
import Jquery from './icons/Jquery';
import Laravel from './icons/Laravel';
import Less from './icons/Less';
import Lightroom from './icons/Lightroom';
import Line from './icons/Line';
import Linkedin from './icons/Linkedin';
import Medium from './icons/Medium';
import Meetup from './icons/Meetup';
import Mobile from './icons/Mobile';
import Mysql from './icons/Mysql';
import Nodejs from './icons/Nodejs';
import Npm from './icons/Npm';
import Opera from './icons/Opera';
import Paypal from './icons/Paypal';
import Photostop from './icons/Photoshop';
import Php from './icons/Php';
import Pinerest from './icons/Pinterest';
import Pocket from './icons/Pocket';
import Python from './icons/Python';
import Reactjs from './icons/Reactjs';
import Safari from './icons/Safari';
import Sass from './icons/Sass';
import Search from './icons/Search';
import Sketch from './icons/Sketch';
import Skype from './icons/Skype';
import Slack from './icons/Slack';
import Stackoverflow from './icons/Stackoverflow';
import Stripe from './icons/Stripe';
import Swift from './icons/Swift';
import Twitter from './icons/Twitter';
import Unity from './icons/Unity';
import Vsco from './icons/Vsco';
import Vue from './icons/Vue';
import Weibo from './icons/Weibo';
import Weixin from './icons/Weixin';
import Whatsapp from './icons/Whatsapp';
import Wordpress from './icons/Wordpress';
import Youtube from './icons/Youtube';
import Zhihu from './icons/Zhihu';

const StyledIcon = styled.svg`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  fill: currentColor;
`;

const icons = {
  adobe: Adobe,
  alipay: Alipay,
  amazon: Amazon,
  android: Android,
  angular: Angular,
  apple: Apple,
  appstore: AppStore,
  blogger: Blogger,
  chrome: Chrome,
  code: Code,
  codeigniter: Codeigniter,
  codepen: Codepen,
  css3: Css3,
  database: Database,
  dev: Dev,
  digitalocean: DigitalOcean,
  docker: Docker,
  edge: Edge,
  facebook: Facebook,
  firefox: Firefox,
  flickr: Flickr,
  git: Git,
  github: GitHub,
  gitlab: Gitlab,
  google: Google,
  googleplay: GooglePlay,
  grunt: Grunt,
  gulp: Gulp,
  hotjar: Hotjar,
  html5: Html5,
  hubspot: Hubspot,
  illustrator: Illustrator,
  instagram: Instagram,
  internetexplorer: InternetExplorer,
  ios: Ios,
  java: Java,
  javascript: Javascript,
  joomla: Joomla,
  jquery: Jquery,
  laravel: Laravel,
  less: Less,
  lightroom: Lightroom,
  line: Line,
  linkedin: Linkedin,
  medium: Medium,
  meetup: Meetup,
  mobile: Mobile,
  mysql: Mysql,
  nodejs: Nodejs,
  npm: Npm,
  opera: Opera,
  paypal: Paypal,
  photoshop: Photostop,
  php: Php,
  pinerest: Pinerest,
  pocket: Pocket,
  python: Python,
  reactjs: Reactjs,
  safari: Safari,
  sass: Sass,
  search: Search,
  sketch: Sketch,
  skype: Skype,
  slack: Slack,
  stackoverflow: Stackoverflow,
  stripe: Stripe,
  swift: Swift,
  twitter: Twitter,
  unity: Unity,
  vsco: Vsco,
  vue: Vue,
  weibo: Weibo,
  weixin: Weixin,
  whatsapp: Whatsapp,
  wordpress: Wordpress,
  youtube: Youtube,
  zhihu: Zhihu,
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
