import React from "react";
import { FaCopyright } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer_container">
        <div className="copyright_container">
          <p className="Copyright">
            <FaCopyright />
            Copyright - Author: Khoi Do
          </p>
        </div>
      </div>
    </>
  );
}
