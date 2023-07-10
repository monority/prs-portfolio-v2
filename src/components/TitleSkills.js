import React from 'react'



const TitleSkills = ({ title, backgroundColor}) => {
  const wrapperClass = `wrapper-skill ${backgroundColor ? backgroundColor : ''}`;
  return (
    <div className={wrapperClass}>
      <div className="wrapper-skill-content">
        <h1>{title}</h1>                                                  
      </div>
    </div>
  )
}

export default TitleSkills