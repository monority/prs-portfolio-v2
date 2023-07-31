import React from 'react';
import Button from './Button';

const Card = ({ title, action, description, image, subtitle, icons, iconsback, RenderFront, RenderBack }) => {
  return (
    <>
      <div className="card-wrap" onClick={action}>
      
        <div className="text-wrap">
          <div className="title-wrap">
            <h3>{title}</h3>
            <h5>{subtitle}</h5> 
          </div>
          <div className="desc-wrap">
            <p>{description}</p>
          </div>
          <div className="icon-wrap">
            {RenderFront && (
              icons.map((icon, index) => (
                <img
                  key={index}
                  src={`${process.env.PUBLIC_URL}/icon-front/${icon}.svg`}
                  alt="icons"
                  className='icons'
                />
              ))
            )}
            {RenderBack && (
              iconsback.map((icon, index) => (
                <img
                  key={index}
                  src={`${process.env.PUBLIC_URL}/icon-back/${icon}.svg`}
                  alt="icons"
                  className='icons'
                />
              ))
            )}
          </div>
          <div className="button-wrap">
            <Button className="btn-read">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
