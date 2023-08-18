import React from 'react'
import IconCustom from '../components/IconCustom';
import cv from '../cv.pdf'
import { Link } from 'react-router-dom';
import Contact from '../components/Contact'
const LandingPage = () => {

    return (
        <>

            <div className="content-wrap">
                <div className="title-wrap">
                    <h1>Front-end  <br />développeur</h1>
                </div>
                <div className="info-wrap">
                    <p><IconCustom
                        type="AiOutlineHome"
                        size="1rem"
                    /> Lille</p> <p><IconCustom
                        type="AiOutlineIdcard"
                        size="1rem"
                    /> Junior</p>
                </div>
                <div className="text-wrap">
                    <p>Bienvenue, je suis Ronan Chenu.<br />Je souhaite créer des belles applications web. </p>
                </div>
                <div className="btn-wrap">
                    <Contact></Contact>
                    <span className='btn-contact'>
                        <Link
                        aria-label='télécharger le cv'
                            to={cv}
                            download="CV-Ronan Chenu"
                            target="_blank"
                            rel="noreferrer">
                            <IconCustom
                                type="AiOutlineArrowDown"
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