import React from 'react'
import BoxAbout from '../components/BoxAbout'
const About = () => {
  return (
    <>
                <div className="wrapper-image">
                <img src={`${process.env.PUBLIC_URL}/dev.png`} alt="Developer Illustration" />
            </div>

      <div className="wrapper-text">
                <h1>About me</h1>
                <p>I'm currently based in Lille. I started to study development recently and my main goal
                  is to become a UX Designer and a Front-end developer
                </p>


            </div>
    </>
  )
}

export default About