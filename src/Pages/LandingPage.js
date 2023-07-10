import React from 'react'
import icons from '../array/svg';
const LandingPage = () => {

    const iconsmap = icons.map(svg => {
        return (
            <li>
                <img src={`${process.env.PUBLIC_URL}/icon/${svg}.svg`} alt="Illustration developer"></img>
            </li>
        )
    })
    return (
        <>
            <div className="wrapper-image">
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Illustration developer"></img>
            </div>
            <div className="wrapper-text">
  
                <p>Bonjour, je m'appelle</p>
                <p>Ronan Chenu</p>
               
                <p className='gradient'>Je suis front-end <strong className='landing-gradient'>développeur</strong> junior.</p>
                <div className="btn-wrap"><p className='btn-contact'>Me contacter</p></div>
            </div>
        </>
    )
}

export default LandingPage;