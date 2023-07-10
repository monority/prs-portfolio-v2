import React from 'react';
import {BsCodeSlash} from 'react-icons/bs'
import { BiLogoRedux, BiLogoReact } from 'react-icons/bi';
import {AiOutlineProfile, AiOutlineHome, AiFillHome } from 'react-icons/ai';
import {SiJavascript} from 'react-icons/si';
import {FaPeopleGroup, FaLocationDot, FaDev} from 'react-icons/fa6'
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
  FaLocationDot,
  AiFillHome,
  FaDev,
  BsCodeSlash,
  
};
const IconCustom = ({ type, size, className, action}) => {
  const SpecificIcon = components[type];
  return  <SpecificIcon size={size} onClick={action} className={className}/>;
};

export default IconCustom;