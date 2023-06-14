import React from 'react'
import "./proj.css"
function Contact() {
  return (
    <section className="contact-us">
      <h2 className="contact-us-heading">Contact Us</h2>
      <form className="contact-us-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </section>
  )
}

export default Contact