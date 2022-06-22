import React from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

import "./Navbarlogedin.css";

const Navbarlogedin = () => {
  let navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="navbarlogedin flex">
      <div className="logo">
        <h1>interwiu.com</h1>
      </div>
      <ul className="nav-list flex">
        <li className="nav-item">
          <Link to="/searching" className="active">
            <p>Find an Interviewer</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/sent-requests">
            <p>Sent Requests</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/accepted-requests">
            <p>Accepted Requests</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/upcoming-interviews">
            <p>Upcoming Interviews</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/completed-interviews">
            <p>Completed Interviews</p>
          </Link>
        </li>
      </ul>
      <div className="sidebar flex">
        {/* Notification Bell */}

        {location.pathname === "/profile-form" ? null : (
          <div
            className="notifier"
            onClick={() => {
              const dropdown = document.querySelector(".notification-dropdown");
              dropdown.classList.toggle("hide");
            }}
          >
            <i className="fa-solid fa-bell"></i>
            <div className="dot">76</div>
          </div>
        )}

        <div className="notification-dropdown hide">
          <h4>Notification</h4>
          <hr />
          <div className="notification-item">
            <h6>Notification Head</h6>
            <p>
              Notification Desc such as Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          <hr />
          <div className="notification-item">
            <h6>Notification Head</h6>
            <p>
              Notification Desc such as Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
        </div>

        {/* Profile Dropdown */}

        <div
          className="sidebar-profile flex"
          onClick={() => {
            const dropdown = document.querySelector(".profile-dropdown");
            dropdown.classList.toggle("hide");
          }}
        >
          <div className="sidebar-profile-img flex">
            <img src={require("../../images/photo.png")} alt="" />
          </div>
        </div>
        <div className="profile-dropdown hide">
          <div className="profile-dropdown-sec">
            <div className=" profile-dropdown-head flex">
              <div>
                <img src={require("../../images/photo.png")} alt="" />
              </div>
              <div>
                <h5>John Doe</h5>
                <p>B.Tech</p>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="cust-btn view-profile-btn"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                View Profile
              </button>
            </div>
          </div>
          <hr />
          <div className="profile-dropdown-sec">
            <div className="dropdown-btn">
              <p>Report an Issue</p>
            </div>
            <div className="dropdown-btn">
              <p>Account Settings</p>
            </div>
            <div
              className="dropdown-btn"
              onClick={() => {
                navigate("/contact");
              }}
            >
              <p>Contact Us</p>
            </div>
            <div
              className="dropdown-btn"
              onClick={() => {
                navigate("/about");
              }}
            >
              <p>About Us</p>
            </div>
          </div>
          <hr />
          <div className="profile-dropdown-sec">
            <div className="dropdown-logout-btn">
              <form action="http://localhost:8585/auth/logout">
                <button type="submit" className="cust-btn logout-btn">
                  Log Out
                </button>
              </form>
            </div>
          </div>
        </div>
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
          <li className="nav-item"></li>
          <li className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Help and Support</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbarlogedin;
