import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [status, setStatus] = useState(null);


  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target); // Use e.target instead of form.current
    const messageData = {
      to_name: "Recipient's Name", // Replace with the actual recipient's name
      from_firstname: formData.get("firstname"),
      from_lastname: formData.get("lastname"),
      from_email: formData.get("email"),
      message: formData.get("message"),
    };

    emailjs.send(
      process.env.REACT_APP_YOUR_SERVICE_ID,
      process.env.REACT_APP_YOUR_TEMPLATE_ID,
      messageData,
      process.env.REACT_APP_YOUR_PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
        setStatus("sent");
      })
      .catch((error) => {
        console.log(error.text);
        setStatus("error");
      });
  };


  return (
    <>
      <div id="contact-page">
        <div className="title-wrap">
          <h2>Me contacter</h2>
        </div>
        <div className="content-wrap">
          <form onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="lastname">Votre nom : </label>
              <input
                type="text"
                name="lastname"

                placeholder="John doe"
                required
              />
            </div>
            <hr />
            <div className="form-group">
              <label htmlFor="firstname">Votre prénom : </label>
              <input
                type="text"
                name="firstname"

                placeholder="John doe"
                required
              />
            </div>
            <hr />
            <div className="form-group">
              <label htmlFor="email">Votre mail : </label>
              <input
                type="email"
                name="email"
                placeholder="Johndoe@example.fr"
                required
              />
            </div>
            <hr />
            <div className="form-group">
              <label htmlFor="message">Comment puis je-vous aider ? </label>
              <input
                type="text"
                name="message"
                placeholder="Votre message"
                required
              />
            </div>

            <input type="submit" value="Valider" className="btn-contact btn-submit" />
          </form>
          {status === "sending" && (
            <div className='message loading'>Envoi..</div>
          )
          }
          {status === "sent" && (
            <div className='message sent'>Message envoyé !</div>
          )
          }
          {status === "error" && (
            <div className='message error'>Erreur.</div>
          )

          }
        </div>
      </div>

    </>
  );
};

export default Contact;
