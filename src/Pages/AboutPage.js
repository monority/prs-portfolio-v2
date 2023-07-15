import React from 'react'
const AboutPage = () => {
  return (
    <>

      <div className="content-wrap">
        <div className="title-wrap">
          <h2>A propos de moi</h2>
        </div>
        <p>J'ai toujours été passionné par l'informatique et c'est récemment que j'ai décidé de poursuivre ma réelle vocation vers le développement web.</p>
        <p>Mes principaux objectifs actuellement est d'intégrer une entreprise vivante et de pouvoir m'investir pour créer des projets innovants.</p>
        <p>C'est dans le côté front-end que je m'épanouis et mon but à long terme est de devenir UX Designer / Front-end développeur. </p>
      </div>
      <div className="image-wrap">
        <img src={`${process.env.PUBLIC_URL}/dev.png`} alt="Developer Illustration" />
      </div>
    </>
  )
}

export default AboutPage;