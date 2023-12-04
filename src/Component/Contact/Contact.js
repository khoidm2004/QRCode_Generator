import React from "react";
import "./Contact.css";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <div className="contact_container">
        <h2>Connect with us:</h2>
        <div className="icon_container">
          <a className="icon_container_blue" href="/">
            <FaFacebook />
          </a>
          <a className="icon_container_lightblue" href="/">
            <FaTwitter />
          </a>
          <a className="icon_container_blue" href="/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
}
