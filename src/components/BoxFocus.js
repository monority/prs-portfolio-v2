import React from 'react'
import IconCustom from './IconCustom'


const BoxFocus = ({ title, content , typeIcon, typeIconSecond, isShow = false }) => {
  return (

    <div className="wrapper-focus-content">
      <h1>{title}</h1>
      <hr />
      <p>{content}</p>

      <IconCustom isShow="true" size="2rem" type={typeIcon} className="icon-content" />
      {isShow ? <IconCustom size="2rem" type={typeIconSecond} className="icon-content" /> : null}


    </div>
  )
}

export default BoxFocus