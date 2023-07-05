import React from 'react'

const About = () => {
  return (
    <>
      <h1>About me</h1>
      <div className="wrapper-about">
       

        <div className="wrapper-text">
          <p>I'm a dedicated developer and i've been trying to focus on creating pleasant website for companies and users.
            My journey in development started recently with few trainings but my enjoyment for creativity and design is a life story.

          </p>
          <div className="wrapper-image">
          <img src={`${process.env.PUBLIC_URL}/profile-about.svg`} alt="developer illustration morning coffee computer" />
        </div>

        </div>
      </div>
    </>
  )
}

export default About