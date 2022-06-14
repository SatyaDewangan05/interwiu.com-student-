import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  // let navigate = useNavigate();

  return (
    <div className="navbar flex">
      <div className="logo">
        <h1>interwiu.com</h1>
      </div>
      <ul className="nav-list flex">
        <li className="nav-item">
          <Link to="/" className="active">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/pricing">Pricing</Link>
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
          <li className="nav-item">
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>Settings</li>
          <li className="nav-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Help and Support</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
