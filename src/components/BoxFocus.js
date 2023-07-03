import React from 'react'


const BoxFocus = ({ title, content, img, arial_image }) => {
  return (
    <div className='wrapper-focus'>

      <div className="wrapper-image">

        <img src={`${process.env.PUBLIC_URL}/${img}`} alt={arial_image} />
      </div>
      <div className="wrapper-focus-content">
        <h1>{title}</h1>
        <p>{content}</p>

      </div>
    </div>
  )
}

export default BoxFocus