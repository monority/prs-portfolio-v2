import React from 'react'

const BoxSkills = ({ title, content, titlebox, backgroundColor, direction }) => {
  const wrapperClass = `skill-wrap ${backgroundColor ? backgroundColor : ''}`;
  const boxClass = `box-wrap ${direction ? direction : ''}`;

  return (
    <>
      <div className={boxClass}>
        <div className="skill-wrap-box">
          <div className={wrapperClass}>
            <div className="skill-wrap-content">
              <h1>{title}</h1>
            </div>
          </div>
          <h1>{titlebox}</h1>
          <p>{content}</p>
        </div>
      </div>

    </>
  )
}

export default BoxSkills