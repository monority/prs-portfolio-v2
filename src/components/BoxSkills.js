import React from 'react'

const BoxSkills = ({title, content}) => {
  return (
    <>
    <div className="wrapper-skills-box">
        <h1>{title}</h1>
        <p>{content}</p>

    </div>
    </>
  )
}

export default BoxSkills