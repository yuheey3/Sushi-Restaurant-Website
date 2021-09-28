import React from "react";
import PizzaLeft from "../assets/about2.jpg";
import "../styles/Contact.css";

function Contact() {
 
    function handleSubmit(e) {
      e.preventDefault();
      alert("Message has been submitted 👍");
      document.getElementById("contact-form").reset();
    }

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>
        <form id="contact-form" onSubmit={handleSubmit}method="POST">
          <label htmlFor="name">Name</label>
          <input name="name"  type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            name="message"
            required
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );

  
}

export default Contact;