import React from 'react';
import { BiLogoRedux, BiLogoReact } from 'react-icons/bi';
import {AiOutlineHome} from 'react-icons/ai';
import {FaLocationDot} from 'react-icons/fa6'
import {ImProfile} from 'react-icons/im'
import {FiDownload} from 'react-icons/fi'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const components = {
  BiLogoRedux,
  BiLogoReact,
  AiOutlineHome,
  FaLocationDot,
  ImProfile,
  FiDownload,
  AiFillGithub,
  AiFillLinkedin
};
const IconCustom = ({ type, size, className, action}) => {
  const SpecificIcon = components[type];
  return  <SpecificIcon size={size} onClick={action} className={className}/>;
};

export default IconCustom;