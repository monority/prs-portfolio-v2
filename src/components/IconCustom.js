import React from 'react';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineHome, AiOutlineIdcard, AiFillGithub, AiFillLinkedin, AiOutlineArrowDown } from 'react-icons/ai';

const components = {
  AiOutlineHome,
  AiOutlineIdcard,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowDown,
  AiOutlineGithub,
  AiOutlineLinkedin
};
const IconCustom = ({ type, size, className, action }) => {
  const SpecificIcon = components[type];
  return <SpecificIcon size={size} onClick={action} className={className} />;
};

export default IconCustom;