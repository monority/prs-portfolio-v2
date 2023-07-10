import React from 'react'
import IconCustom from './IconCustom'


const BoxAbout = ({ title, content, typeIcon }) => {
    return (
        <div className="wrapper-about">
            <div className="wrapper-about-content">
                <IconCustom isShow="true" size="2rem" type={typeIcon} className="icon-content" />
                <h1>{title}</h1>
                <hr />
                <p>{content}</p>
            </div>
        </div>
    )
}

export default BoxAbout