import React, { Fragment } from 'react'
import TitleSkills from '../components/TitleSkills'
import BoxSkills from '../components/BoxSkills';
import Tabs from '../components/Tabs';

const SkillPage = ({ typicon, title, content, }) => {

  return (
    <>
      <div className="wrapper-title">
        <h1>My Skills</h1>
      </div>
      <div className="container-wrap">
        <TitleSkills
          title="Créativité"

          content="I like to work on mobile first and then adapt my project on tablet and desktop format"
          backgroundColor="background-blue"
        />
      </div>
      <BoxSkills
        title="Idées créatives"
        content="J'ai par le passé développer mes idées via photoshop et illustrator. J'ai notamment exercer dans le level design sur le moteur Source (CSS). Je suis assez sensible au côté design et artistique et c'est un point clé et primordial dans les projets de mon point de vue."
      />
   
    </>
  )
}

export default SkillPage;