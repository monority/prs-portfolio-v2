import React from 'react';
import { BiLogoRedux, BiLogoReact } from 'react-icons/bi';
import {AiOutlineProfile} from 'react-icons/ai';
import {SiJavascript} from 'react-icons/si';
import {FaPeopleGroup} from 'react-icons/fa6'

const components = {
  BiLogoRedux,
  BiLogoReact,
  AiOutlineProfile,
  SiJavascript,
  FaPeopleGroup
};

const IconCustom = ({ type, size, className}) => {
  const SpecificIcon = components[type];

  return  <SpecificIcon size={size} className={className} />;
};

export default IconCustom;