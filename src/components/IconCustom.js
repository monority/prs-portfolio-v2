import React from 'react';
import { BiLogoRedux, BiLogoReact } from 'react-icons/bi';
import {AiOutlineProfile, AiOutlineHome } from 'react-icons/ai';
import {SiJavascript} from 'react-icons/si';
import {FaPeopleGroup} from 'react-icons/fa6'
import {BsPersonWorkspace, BsFillPersonLinesFill} from 'react-icons/bs'

const components = {
  BiLogoRedux,
  BiLogoReact,
  AiOutlineProfile,
  SiJavascript,
  FaPeopleGroup,
  AiOutlineHome,
  BsPersonWorkspace,
  BsFillPersonLinesFill,
  
};
const IconCustom = ({ type, size, className, action}) => {
  const SpecificIcon = components[type];
  return  <SpecificIcon size={size} onClick={action} className={className}/>;
};

export default IconCustom;