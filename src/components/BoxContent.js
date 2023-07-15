import React from 'react'
import IconCustom from './IconCustom'

const BoxContent = ({ keys, title, action, content, image, arial_image, typeIcon, typeIconSecond, isShow = false , reverse}) => {
    const wrapperClass = `box-wrap ${reverse ? reverse : ''}`;
    return (
        <div className= {wrapperClass}>
            <div className="text-wrap">
                <div className="subtitle-wrap">
                    <img src={`${process.env.PUBLIC_URL}/${image}`} alt={arial_image} />
                    <h3>{title}</h3>
                </div>
                <p>{content}</p>
                <div className="icon-wrap">
                    <IconCustom isShow="true" size="2rem" type={typeIcon} className="icon-content" />
                    {isShow ? <IconCustom size="2rem" type={typeIconSecond} className="icon-content" /> : null}
                </div>
            </div>
            <div className="image-wrap">
                <img src={`${process.env.PUBLIC_URL}/${image}`} alt={arial_image} />
            </div>
        </div>
    )
}

export default BoxContent;