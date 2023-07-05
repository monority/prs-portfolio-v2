import React, { Fragment } from 'react'
import BoxFocus from '../components/BoxFocus'

const Focus = ({ typicon, title, content,}) => {

  return (
    <>
      <div className="wrapper-title">
        <h1>My Skills</h1>*
      </div>
      <div className="wrapper-focus">
        <BoxFocus
          title="Adaptability"
          typeIcon="FaPeopleGroup"
          content="I like to work on mobile first and then adapt my project on tablet and desktop format "
        ></BoxFocus>

      </div>
 
      <div className="wrapper-focus">
        <BoxFocus
          title="Adaptability"
          typeIcon="FaPeopleGroup"
          content="I like to work on mobile first and then adapt my project on tablet and desktop format "
        ></BoxFocus>

      </div>
 
      <div className="wrapper-focus">
        <BoxFocus
          title="Adaptability"
          typeIcon="FaPeopleGroup"
          content="I like to work on mobile first and then adapt my project on tablet and desktop format "
        ></BoxFocus>

      </div>
 
      <div className="wrapper-focus">
        <BoxFocus
          title="Adaptability"
          typeIcon="FaPeopleGroup"
          content="I like to work on mobile first and then adapt my project on tablet and desktop format "
        ></BoxFocus>

      </div>
 


    </>
  )
}

export default Focus