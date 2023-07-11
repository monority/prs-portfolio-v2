import React from 'react'
import IconCustom from './IconCustom'

const BoxContent = ({ keys, title, action, content, image, arial_image, typeIcon, typeIconSecond, isShow = false }) => {
    return (
        <div className='box-wrap'>
            <div className="image-wrap">
                <img src={`${process.env.PUBLIC_URL}/${image}`} alt={arial_image} />
            </div>
            <div className="content-wrap">
                <h2>{title}</h2>
                <p>{content}</p>
                <div className="icon-wrap">
                    <IconCustom isShow="true" size="2rem" type={typeIcon} className="icon-content" />
                    {isShow ? <IconCustom size="2rem" type={typeIconSecond} className="icon-content" /> : null}
                </div>
            </div>
        </div>
    )
}

export default BoxContent;