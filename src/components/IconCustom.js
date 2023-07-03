import React from 'react';
import { BiLogoRedux, BiLogoReact } from 'react-icons/bi';
import {AiOutlineProfile} from 'react-icons/ai'

const components = {
  BiLogoRedux,
  BiLogoReact,
  AiOutlineProfile,
};

const IconCustom = ({ type, size, className}) => {
  const SpecificIcon = components[type];

  return  <SpecificIcon size={size} className={className} />;
};

export default IconCustom;