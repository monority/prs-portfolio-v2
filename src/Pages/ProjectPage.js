import React from 'react'
import Card from '../components/Card'
const ProjectPage = () => {
const iconTelefoot = ["sass"];
const iconTelefoots = ["php"];
const modaltelefoot = () =>{
  return false;
}
return (
    <>
      <div className="content-wrap">
        <div className="title-wrap">
          <h2>Mes projets</h2>
        </div>
        <div className="cards-wrap">
          <Card
            image="telefoot"
            title="Telefoot  "
            subtitle="Applications pour abonnés"
            description="Projet construit en PHP/MVC. Lié à une base de données, l'utilisateur peut s'enregistrer/login/changer son mot de passe via récupération email"
            action={() => modaltelefoot()}
            icons={iconTelefoot}
            iconsback={iconTelefoots}
            RenderBack={true}
            RenderFront={true}
          />
          {/* <Card
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
          /> */}
        </div>
      </div>
    </>
  )
}

export default ProjectPage;