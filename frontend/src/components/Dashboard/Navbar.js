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
            Interviewers
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about">Pending Requests</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact">Upcoming Interviews</Link>
        </li>
        <li className="nav-item">
          <Link to={"/dashboard"}>Profile</Link>
        </li>
      </ul>
      <div className="sidebar flex">
        <form action="http://localhost:8585/auth/logout">
        <button
          className="cust-btn login-btn"
          type="submit"
        >
          Log Out
        </button>
        </form>
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
