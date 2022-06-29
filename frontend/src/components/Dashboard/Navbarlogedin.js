import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./Navbarlogedin.css";

const Navbarlogedin = () => {
  let navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   console.log(window.location.pathname);
  // }, []);

  const pathname = window.location.pathname.toLowerCase();
  const navItem = document.querySelectorAll(".nav-item a");
  if (pathname === "/searching") {
    console.log(pathname);
    navItem.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (item.href.includes("searching")) {
        item.firstChild.classList.add("active");
      }
    });
  }
  if (pathname === "/sent-requests") {
    console.log(pathname);
    navItem.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (item.href.includes("sent-requests")) {
        item.firstChild.classList.add("active");
      }
    });
  }
  if (pathname === "/accepted-requests") {
    console.log(pathname);
    navItem.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (item.href.includes("accepted-requests")) {
        item.firstChild.classList.add("active");
        console.log(item.firstChild);
      }
    });
  }
  if (pathname === "/upcoming-interviews") {
    console.log(pathname);
    navItem.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (item.href.includes("upcoming-interviews")) {
        item.firstChild.classList.add("active");
      }
    });
  }
  if (pathname === "/completed-interviews") {
    console.log(pathname);
    navItem.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (item.href.includes("completed-interviews")) {
        item.firstChild.classList.add("active");
      }
    });
  }

  // var prevScrollpos = window.pageYOffset;
  // window.onscroll = function () {
  //   var currentScrollPos = window.pageYOffset;
  //   // console.log(currentScrollPos);
  //   if (prevScrollpos === currentScrollPos) {
  //     document.querySelector(".navbarlogedin").style.top = "0";
  //   } else {
  //     document.querySelector(".navbarlogedin").style.top = "-100px";
  //   }
  //   // prevScrollpos = currentScrollPos;
  // };
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
            <p>
              Accepted Requests <span className="notify">4</span>
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/upcoming-interviews">
            <p>Upcoming Interviews</p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/completed-interviews">
            <p>
              Completed Interviews{" "}
              <span
                style={{ backgroundColor: "yellow", color: "black" }}
                className="notify"
              >
                2
              </span>
            </p>
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
                <p>B.Tech, IIT Kharagpur</p>
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
              <p>
                <i class="fa-solid fa-triangle-exclamation"></i> Report an Issue
              </p>
            </div>
            <div className="dropdown-btn">
              <p>
                <i className="fa-solid fa-gear"></i> Account Settings
              </p>
            </div>
            <div className="dropdown-btn">
              <p>
                <i className="fa-solid fa-bookmark"></i> Bookmark
              </p>
            </div>
            {/* <div
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
            </div> */}
          </div>
          <hr />
          <div className="profile-dropdown-sec">
            <div className="dropdown-logout-btn">
              <form action="http://localhost:8585/auth/logout">
                <button type="submit" className="cust-btn logout-btn">
                  <i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out
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
