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
          titlebox="De l'intérêt pour tout"
          content="J'ai par le passé développer mes idées via photoshop et illustrator. J'ai notamment exercer dans le level design sur le moteur Source (CSS). Je suis assez sensible au côté design et artistique et c'est un point clé et primordial dans les projets de mon point de vue."
        />
           <BoxSkills
          backgroundColor="background-orange left-title"
          title="Méthode agile"
          direction="left"
          titlebox="Adapté aux entreprises"
          content="J'ai par le passé développer mes idées via photoshop et illustrator. J'ai notamment exercer dans le level design sur le moteur Source (CSS). Je suis assez sensible au côté design et artistique et c'est un point clé et primordial dans les projets de mon point de vue."
        />
         <BoxSkills
          backgroundColor="background-red right-title"
          direction="right"
          title="Curiosité"
          titlebox="Design & Art"
          content="J'ai par le passé développer mes idées via photoshop et illustrator. J'ai notamment exercer dans le level design sur le moteur Source (CSS). Je suis assez sensible au côté design et artistique et c'est un point clé et primordial dans les projets de mon point de vue."
        />
      </div>
    </>
  )
}

export default SkillPage;