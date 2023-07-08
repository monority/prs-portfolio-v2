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
            <div className="wrapper-text">
              <h1>beautiful and creative things.</h1>
              <h1>turning my <span className='landing-gradient'>ideas</span> into my project<strong>.</strong></h1>
            </div>
          
        </>
    )
}

export default LandingPage;