import React from 'react'
import BoxSkills from '../components/BoxSkills';


const SkillPage = () => {
  return (
    <>
      <div className="content-wrap">
        <div className="title-wrap">
          <h1>Mes qualités</h1>
        </div>

        <BoxSkills
          backgroundColor="background-purple left-title"
          title="Créativité"
          direction="left"
          titlebox="Design & Art"
          content="J'ai par le passé développer mes idées via photoshop et illustrator. J'ai notamment exercer dans le level design sur le moteur Source (CSS). Je suis assez sensible au côté design et artistique et c'est un point clé et primordial dans les projets de mon point de vue."
        />
        <BoxSkills
          backgroundColor="background-blue right-title"
          direction="right"
          title="Polyvalence"
          titlebox="Adaption"
          content="Dans ce domaine, je considère qu'il faut savoir s'adapter aux évolutions constantes mais aussi aux besoin des entreprises. Les frameworks et librairies sont multiples et la veille technologique doit être régulière"
        />
           <BoxSkills
          backgroundColor="background-orange left-title"
          title="Méthode agile"
          direction="left"
          titlebox="Collaboration"
          content="J'ai étudié la méthode agile scrum que ça soi tant que sur l'aspect théorique mais aussi en pratique réelle. Cela me permet d'être en accord avec mon équipe et d'être efficace sur le travail en collaboration."
        />
         <BoxSkills
          backgroundColor="background-red right-title"
          direction="right"
          title="Curiosité"
          titlebox="Appétence"
          content="Je suis naturellement de nature curieuse et je porte de l'intérêt aux travaux des autres et aux domaines qui m'entoure. J'aime constamment apprendre de nouvelles choses et de développer mes connaissances."
        />
      </div>
    </>
  )
}

export default SkillPage;