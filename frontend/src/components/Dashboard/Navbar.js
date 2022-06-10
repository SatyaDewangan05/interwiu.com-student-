import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  let navigate = useNavigate();

  // console.log(window.location.pathname);

  // if (window.location.pathname === "/dashboard") {
  //   const navList = document.querySelector(".nav-list");
  //   navList.style.display = "none";
  //   const loginBtn = document.querySelector(".login-btn");
  //   loginBtn.innerHTML = "Log Out";
  //   console.log("dashboard");
  // }

  return (
    <div className="navbar flex">
      <div className="logo">
        <h1>interwiu.com</h1>
      </div>
      <div className="sidebar flex">
        <div className="notifier">
          <i className="fa-solid fa-bell"></i>
          <div className="dot">76</div>
        </div>
        <button
          className="cust-btn login-btn"
          onClick={() => {
            navigate("/");
          }}
        >
          Log Out
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
