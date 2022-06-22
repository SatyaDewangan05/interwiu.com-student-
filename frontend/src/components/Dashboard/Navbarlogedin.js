import React from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

import "./Navbarlogedin.css";

const Navbarlogedin = () => {
  let navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="navbar flex">
      <div className="logo">
        <h1>interwiu.com</h1>
      </div>
      <ul className="nav-list flex">
        <li className="nav-item">
          <Link to="/searching" className="active">
            <p>
              Find an <br /> Interviewer
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/sent-requests">
            <p>
              Sent <br /> Requests
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/accepted-requests">
            <p>
              Accepted <br /> Requests
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/upcoming-interviews">
            <p>
              Upcoming <br /> Interviews
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/completed-interviews">
            <p>
              Completed <br /> Interviews
            </p>
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link to={"/dashboard"}>Profile</Link>
        </li> */}
      </ul>
      <div className="sidebar flex">
        <div className="flex">
          <p style={{ margin: "0px" }}>Hi! John</p>
          <button
            className="cust-btn login-btn"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            <img
              src={require("../../images/photo.png")}
              alt=""
              height={"40px"}
            />
          </button>
        </div>
        {location.pathname === "/profile-form" ? null : (
          <div className="notifier">
            <i className="fa-solid fa-bell"></i>
            <div className="dot">76</div>
          </div>
        )}
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
          <li>
            <form action="http://localhost:8585/auth/logout">
              <button type="submit">Log out</button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbarlogedin;
