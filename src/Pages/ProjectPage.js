import React from 'react'
import BoxContent from '../components/BoxContent'
import Card from '../components/Card'
const ProjectPage = () => {

  return (
    <>
      <div className="content-wrap">
        <div className="title-wrap">
          <h2>Mes projets</h2>
        </div>
        <div className="cards-wrap">
          <Card
            image="baldursgate"
            title="Duel Game"
            subtitle="Baldur's Gate"
            description="Ce projet fut construit en php. Le but est de créer un jeu de duel en utilisant les classes PHP."
            action=""
          />
          <Card
            image="baldursgate"
            title="Dashboard"
            subtitle="Regroupement de fonctionnalités"
            description="Projet qui regroupe agenda/tâches/emails"
            action=""
          />
          <Card
            image="baldursgate"
            title="Projet Baldur's Gate"
            description="Ce projet fut construit en php. Le but est de créer un jeu de duel en utilisant les classes PHP."
            action=""
          />
          <Card
            image="baldursgate"
            title="Projet Baldur's Gate"
            description="Ce projet fut construit en php. Le but est de créer un jeu de duel en utilisant les classes PHP."
            action=""
          />
        </div>
      </div>
    </>
  )
}

export default ProjectPage;