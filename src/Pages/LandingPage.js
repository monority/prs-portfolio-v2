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
                <h1>Front-end Developer</h1>
                <p>Hello, i'm Ronan, i'm passionate by developing Front-End application for all formats. <br /> I'm currently based in Lille.</p>

                <ul>
                    {iconsmap}
                </ul>

            </div>
            <div className="wrapper-image">
                <img src={`${process.env.PUBLIC_URL}/dev.png`} alt="Developer Illustration" />
            </div>
        </>
    )
}

export default LandingPage;