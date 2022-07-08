import React from "react";
import "./InterviewerNavbar.css";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

function InterviewerAcceptedNavbar() {
  let navigate = useNavigate();
  const location = useLocation();

  // const [isHighlighted1, setIsHighlighted1] = React.useState(false);
  // const [isHighlighted2, setIsHighlighted2] = React.useState(false);
  // const [isHighlighted3, setIsHighlighted3] = React.useState(false);
  // const [isHighlighted4, setIsHighlighted4] = React.useState(false);

  // const handleClick1 = () => {
  //   if (isHighlighted1 === false) {
  //     setIsHighlighted1((current) => !current);
  //     if (isHighlighted2) {
  //       setIsHighlighted2(false);
  //     } else if (isHighlighted3) {
  //       setIsHighlighted3(false);
  //     } else if (isHighlighted4) {
  //       setIsHighlighted4(false);
  //     }
  //   }
  // };
  // const handleClick2 = () => {
  //   if (isHighlighted2 === false) {
  //     setIsHighlighted2((current) => !current);
  //     if (isHighlighted1) {
  //       setIsHighlighted1(false);
  //     } else if (isHighlighted3) {
  //       setIsHighlighted3(false);
  //     } else if (isHighlighted4) {
  //       setIsHighlighted4(false);
  //     }
  //   }
  // };
  // const handleClick3 = () => {
  //   if (isHighlighted3 === false) {
  //     setIsHighlighted3((current) => !current);
  //     if (isHighlighted2) {
  //       setIsHighlighted2(false);
  //     } else if (isHighlighted1) {
  //       setIsHighlighted1(false);
  //     } else if (isHighlighted4) {
  //       setIsHighlighted4(false);
  //     }
  //   }
  // };
  // const handleClick4 = () => {
  //   if (isHighlighted4 === false) {
  //     setIsHighlighted4((current) => !current);
  //     if (isHighlighted2) {
  //       setIsHighlighted2(false);
  //     } else if (isHighlighted3) {
  //       setIsHighlighted3(false);
  //     } else if (isHighlighted1) {
  //       setIsHighlighted1(false);
  //     }
  //   }
  // };

  return (
    <div className="navbarlogedin1 flex">
      <div className="logo1">
        <h1>interwiu.com</h1>
      </div>
      <ul
        className="nav-list1 "
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "70%",
        }}
      >
        <li className="nav-item1">
          <Link to="/interviewer-request">
            <p>Received Requests</p>
          </Link>
        </li>
        <li className="nav-item1">
          <Link to="/interviewer-accepted">
            <p style={{ color: "rgb(18, 154, 18)", fontSize: "20px", fontWeight:"600" }}>
              Accepted Requests
            </p>
          </Link>
        </li>
        <li className="nav-item1">
          <Link to="/interviewer-upcoming">
            <p>Upcoming Interviews</p>
          </Link>
        </li>
        <li className="nav-item1">
          <Link to="/interviewer-completed">
            <p>Completed Interviews</p>
          </Link>
        </li>
      </ul>
      <div className="sidebar1 flex">
        {/* Notification Bell */}

        {location.pathname === "/profile-form" ? null : (
          <div
            className="notifier1"
            onClick={() => {
              const dropdown = document.querySelector(".notification-dropdown");
              dropdown.classList.toggle("hide");
            }}
          >
            <i className="fa-solid fa-bell"></i>
            <div className="dot">76</div>
          </div>
        )}

        <div className="notification-dropdown1 hide">
          <h4>Notification</h4>
          <hr />
          <div className="notification-item1">
            <h6>Notification Head</h6>
            <p>
              Notification Desc such as Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
          <hr />
          <div className="notification-item1">
            <h6>Notification Head</h6>
            <p>
              Notification Desc such as Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
          </div>
        </div>

        {/* Profile Dropdown */}

        <div
          className="sidebar-profile1 flex"
          onClick={() => {
            const dropdown = document.querySelector(".profile-dropdown");
            dropdown.classList.toggle("hide");
          }}
        >
          <div className="sidebar-profile-img flex">
            <img src={require("../../images/photo.png")} alt="" />
          </div>
        </div>
        <div className="profile-dropdown1 hide">
          <div className="profile-dropdown-sec1">
            <div className=" profile-dropdown-head flex1">
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
                className="cust-btn1 view-profile-btn1"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                View Profile
              </button>
            </div>
          </div>
          <hr />
          <div className="profile-dropdown-sec1">
            <div className="dropdown-btn1">
              <p>Report an Issue</p>
            </div>
            <div className="dropdown-btn1">
              <p>Account Settings</p>
            </div>
            <div
              className="dropdown-btn1"
              onClick={() => {
                navigate("/contact");
              }}
            >
              <p>Contact Us</p>
            </div>
            <div
              className="dropdown-btn1"
              onClick={() => {
                navigate("/about");
              }}
            >
              <p>About Us</p>
            </div>
          </div>
          <hr />
          <div className="profile-dropdown-sec1">
            <div className="dropdown-logout-btn1">
              <form action="http://localhost:8585/auth/logout">
                <button type="submit" className="cust-btn1 logout-btn1">
                  Log Out
                </button>
              </form>
            </div>
          </div>
        </div>
        <ul className="dropdown1 hide">
          <li className="nav-item1">
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li className="nav-item1">
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>Settings</li>
          <li className="nav-item1"></li>
          <li className="nav-item1">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Help and Support</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default InterviewerAcceptedNavbar;
