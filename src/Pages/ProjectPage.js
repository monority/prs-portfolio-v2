import React from 'react'
import BoxContent from '../components/BoxContent'

const ProjectPage = () => {

  return (
    <>
      <div className="content-wrap">
        <div className="title-wrap">
          <h1>Mes projets</h1>
        </div>
        <div className="wrap">
          <BoxContent
            title="Calling Card project"
            arial_image="image exam project front"
            image="leaf.png"
            content="Project created in 1 day. Goal was to set up an app compatible with tablet and most mobile phones where you can register calling cards for a company"
            typeIcon="BiLogoRedux"
            isShow="true"
            typeIconSecond="BiLogoReact"
          />
          <BoxContent
            title="Vegetables Project"
            arial_image="image exam project front"
            image="strapi-basic.png"
            content="Project builded with local api using strappi"
            typeIcon="BiLogoRedux"
          />
        </div>
        </div>
    </>
  )
}

export default ProjectPage;