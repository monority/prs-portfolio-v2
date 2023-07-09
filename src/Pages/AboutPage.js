import React from 'react'
import BoxAbout from '../components/BoxAbout'
const About = () => {
  return (
    <>
                <div className="wrapper-image">
                <img src={`${process.env.PUBLIC_URL}/dev.png`} alt="Developer Illustration" />
            </div>

      <div className="wrapper-text">
                <h1>Ronan Chenu</h1>
               <p className='subtext-title'>Front-end développeur junior</p>
               <p className='subtext-location'>Lille</p>
               <p>J'ai toujours été passionné par l'informatique et c'est récemment que j'ai décidé de poursuivre ma réelle vocation vers le développement web.</p>
               <p>Mes principaux objectifs actuellement est d'intégrer une entreprise vivante et de pouvoir m'investir pour créer des projets innovants.</p>
               <p>C'est dans le côté front-end que je m'épanouis et mon but à long terme est de devenir UX Designer / Front-end développeur. </p>


            </div>
    </>
  )
}

export default About