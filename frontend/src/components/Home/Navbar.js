import React from "react";
// import { Link, Navigate } from "react-router-dom";
import {Link} from 'react-scroll'

// import { useNavigate } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  // let navigate = useNavigate();

  return (
    <div className="navbar flex">
      <div className="logo">
        <a href="/" className="alogo"><h1>interwiu.com</h1></a>
      </div>
      <ul className="nav-list flex">
        <li className="nav-item">
          {/* <Link to="/" className="active">
            Home
          </Link> */}
          <Link  to="home" spy={true} smooth={true} className="tabs hover-underline-animation">Home</Link>
          <Link  to="getStarted" spy={true} smooth={true} className="tabs hover-underline-animation">Get Started</Link>
          <Link  to="howItWorks" spy={true} smooth={true} className="tabs hover-underline-animation">How it Works</Link>
          <Link  to="features" spy={true} smooth={true} className="tabs hover-underline-animation">Features</Link>
          <Link  to="profiles" spy={true} smooth={true} className="tabs hover-underline-animation">Profiles</Link>
          <Link  to="testimonials" spy={true} smooth={true} className="tabs hover-underline-animation">Success Stories</Link>
          <Link  to="faqs" spy={true} smooth={true}className="tabs hover-underline-animation">FAQs</Link>
        </li>
      </ul>
      <div className="sidebar flex">
        <button
          className="cust-btn login-btn"
          onClick={() => {
            const loginFunc = document.querySelector(".login-container");
            loginFunc.classList.remove("hide");
          }}
        >
          Log In
        </button>
        <i
          className="fa-solid fa-bars"
          onClick={() => {
            const dropdown = document.querySelector(".dropdown");
            dropdown.classList.toggle("hide");
          }}
        ></i>
        <ul className="dropdown hide">
          <li>Settings</li>
          <li>
            <a href="/about" className="tags">About Us </a>
          </li>
          <li>
            <a href="/contact" className="tags">Contact Us</a>
          </li>
          <li>Help and Support</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
