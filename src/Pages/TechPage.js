import React from 'react'
import Tab from '../components/Tab'
const TechPage = () => {
    return (
        <>
            <div className="content-wrap">
                <div className="title-wrap">
                    <h2>Tech Stack</h2>

                </div>
                <div className="wrap-sub">
                    <div className="box-wrap-text">
                        <p>La liste de tout les technologies que j 'ai étudié et que je maitrise.
                            En favorisant le front et surtout React. </p>
                    </div>
                    <div className="box-wrap-tab">
                        <Tab></Tab>
                    </div>
                </div></div>
        </>
    )
}

export default TechPage