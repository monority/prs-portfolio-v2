import React from 'react'
import { Link } from 'react-scroll'

const Contact = () => {
    return (
        <>
            <span className='btn-contact'>
            <Link  aria-label="Envoi vers le formulaire de contact" to="contact-page" offset={-150} spy={true} smooth={true} duration={300}>Contact</Link>
            </span>
        </>
    )
}

export default Contact