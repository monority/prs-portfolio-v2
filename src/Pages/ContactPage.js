import React from 'react'

const Contact = () => {
  return (
    <>

        <div className="title-wrap">
          <h2>Me contacter</h2>
        </div>
        <div className="content-wrap">
          <form action="" method='post'>

            <div className="form-group">
              <label htmlFor="input-name">Votre nom : </label>
              <input type="text" placeholder='John doe'/>
            </div>
            <hr />
            <div className="form-group">
              <label htmlFor="input-name">Votre prénom : </label>
              <input type="text" placeholder='John doe'/>
            </div>
            <hr />
            <div className="form-group">
              <label htmlFor="input-name">Votre mail : </label>
              <input type="text" placeholder='Johndoe@example.fr'/>
            </div>
            <hr />
            <div className="form-group">
              <label htmlFor="input-name" >Comment puis je-vous aider ? </label>
              <input type="text" placeholder='Votre message'/>
            </div>
            <input type="submit" value="Valider" className='btn-contact btn-submit' />
          </form>
      </div>
    </>
  )
}

export default Contact