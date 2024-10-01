import React from "react";
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa"; // LinkedIn icon
import Navbar from "./Navbar.jsx";
import "./css/contact.css"; // Assuming you'll add styles here

function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <h1 className="contact-header" id="glitch">Let's Get in Touch</h1>
        <p className="contact-text">
          Feel free to reach out to me via any of the platforms below. Whether it's to talk about music, coding, or just to say hi—I'm always up for a good chat!
        </p>
        <div className="contact-links">
          <a href="https://www.instagram.com/george_big_money1" target="_blank" rel="noreferrer" className="contact-link">
            <AiFillInstagram className="contact-icon" />
            <span>@george_big_money1</span>
          </a>
          <a href="mailto:gorgocaptain@gmail.com" className="contact-link">
            <AiOutlineMail className="contact-icon" />
            <span>gorgocaptain@gmail.com</span>
          </a>
          <a href="https://ca.linkedin.com/in/george-florea-237499312" target="_blank" rel="noreferrer" className="contact-link">
            <FaLinkedin className="contact-icon" />
            <span>George Florea</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
