import React from 'react'
import icons from '../array/svg';
import IconCustom from '../components/IconCustom';
import cv from '../cv.pdf'
import { Link } from 'react-router-dom';
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

            <div className="content-wrap">
                <div className="title-wrap">
                    <h1 className='gradient'>Front-end  <br />développeur</h1>
                </div>
                <div className="info-wrap">
                    <p><IconCustom
                        type="FaLocationDot"
                        size="1rem"
                    /> Lille</p> <p><IconCustom
                        type="ImProfile"
                        size="1rem"
                    /> Junior</p>
                </div>
                <div className="text-wrap">
                    <p>Bienvenue, je suis Ronan Chenu.<br />Je souhaite créer des belles applications web. </p>
                </div>
                <div className="btn-wrap">
                    <p className='btn-contact'>Contact</p>
                    <span className='btn-contact'>

                        <Link
                            to={cv}
                            download="CV-Ronan Chenu"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <IconCustom
                                type="FiDownload"
                                size="1rem"
                            /> CV
                        </Link>
                    </span>
                </div>

            </div>


            <div className="image-wrap">
                <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Illustration developer"></img>
            </div>
        </>
    )
}

export default LandingPage;