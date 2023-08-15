import React from 'react';
import { AiOutlineHome, AiOutlineIdcard,AiFillGithub, AiFillLinkedin, AiOutlineArrowDown } from 'react-icons/ai';

const components = {
  AiOutlineHome,
  AiOutlineIdcard,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowDown
};
const IconCustom = ({ type, size, className, action}) => {
  const SpecificIcon = components[type];
  return  <SpecificIcon size={size} onClick={action} className={className}/>;
};

export default IconCustom;