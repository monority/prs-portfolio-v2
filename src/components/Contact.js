import React from 'react'
import { Link } from 'react-scroll'

const Contact = () => {
    return (
        <>
            <span className='btn-contact'>
            <Link  to="contact-page" offset={-150} spy={true} smooth={true} duration={300}>Contact</Link>
            </span>
        </>
    )
}

export default Contact