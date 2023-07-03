import React, { Fragment } from 'react'
import BoxFocus from './BoxFocus'

const Focus = ({ typicon, title, content }) => {

  return (
    <>
      <div className="wrapper-title">
        <h1>My Skills</h1>
      </div>
      <div className="wrapper-regroup-left">
        <BoxFocus
          title="Adaptability"
          img="repo1.svg"
          content="I like to work on mobile first and then adapt my project on tablet and desktop format "
        ></BoxFocus>

      </div>
      <div className="wrapper-regroup-right">
        <BoxFocus
          title="Polyvalent"
          img="repo1.svg"
        ></BoxFocus>

      </div>
      <div className="wrapper-regroup-left">
        <BoxFocus
          title="Creativity"
          img="repo1.svg"
          content="I like to work on mobile first and then adapt my project on tablet and desktop format "
        ></BoxFocus>

      </div>
      <div className="wrapper-regroup-right">
        <BoxFocus
          title="Group working"
          img="repo1.svg"
        ></BoxFocus>

      </div>


    </>
  )
}

export default Focus