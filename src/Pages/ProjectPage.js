import React from 'react'
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
            image="dashboard"
            title="Dashboard"
            subtitle="Regroupement de fonctionnalités"
            description="Projet qui regroupe agenda/tâches/emails créé avec ViteJS / ReactJS"
            action=""
          />
          <Card
            image="cars"
            title="Cars Store"
            subtitle="Commerce de voitures"
            description="Application mobile créé sous React native."
            action=""
          />
          <Card
            image="hotel"
            title="Hotel3000"
            subtitle="Reservation et départ d'hôtel"
            description="Projet construit en simple HTML/CSS/JS, réservation et départ d'hôtel côté client"
            action=""
          />
        </div>
      </div>
    </>
  )
}

export default ProjectPage;