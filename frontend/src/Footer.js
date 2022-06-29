import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="#">How It Works?</Link>
      </div>
      <p>All &copy; reserved to Fyzen Career Solutions Pvt. Ltd. 2022</p>
    </div>
  );
};

export default Footer;
