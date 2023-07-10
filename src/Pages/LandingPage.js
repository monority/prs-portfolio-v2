import React from 'react'
import icons from '../array/svg';
import IconCustom from '../components/IconCustom';
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

            <div className="content-wrapper">
                <div className="wrapper-title">
                    <h1 className='gradient'>Front-end  <br />développeur</h1>
                </div>
                <div className="wrapper-city">
                    <p><strong>●</strong> Lille <strong>●</strong>Junior</p>
                </div>
                <div className="wrapper-text">
                    <p>Bienvenue, je suis Ronan Chenu.<br />Je souhaite créer des belles applications web. </p>
                </div>
                <div className="btn-wrapper">
                <p className='btn-contact'>Me contacter</p>
            </div>
            </div>
            
       
            <div className="wrapper-image">
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Illustration developer"></img>
            </div>
        </>
    )
}

export default LandingPage;