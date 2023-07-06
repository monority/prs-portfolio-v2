import React from 'react'
import BoxContent from '../components/BoxContent'

const Project = () => {

  return (
    <>
      <div className="wrapper-title">
        <h1>My Projects</h1>
      </div>
      <div className="wrapper">
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
    </>
  )
}

export default Project;