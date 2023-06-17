import React from 'react';
import { Link } from "react-router-dom";
import imageFooter from "./../graphics/Group 74 (1).png";

const Footer1 = () => {
  return (
    <div className="footer-container1">
      <img src={imageFooter} alt="Footer" />
      <div className="contact-us">
        <Link to="/ContactUs">Contactez-nous</Link>
      </div>
    </div>
  );
};

export default Footer1;