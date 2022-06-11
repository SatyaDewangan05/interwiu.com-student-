import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";

import Navbar from "./Navbar";

import "./Dashboard.css";

const Dashboard = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  let navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <h1>My Dashboard</h1>
        <button
          className="cust-btn edit-btn"
          onClick={() => {
            navigate("/profile-form");
          }}
        >
          <i class="fa-solid fa-pen-to-square"></i>Edit
        </button>
        <div className="bio">
          <div className="dashboard-info">
            <div className="profile-photo">
              <img
                src={require("../../images/photo.png")}
                alt="Profile-photo"
              />
            </div>
            <h2>John Doe</h2>
            <h5>
              B.Tech, Computer Science Engineering, MIT, Cambridge, MA 02139,
              United States
            </h5>
            <Link to="#">Resume</Link>
            {/* <p>Session Recording Proference: Yes</p> */}
          </div>
          <div className="dashboard-desc">
            <p className="desc-head">Description: </p>
            <p className="desc-item">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              nostrum neque ipsa voluptates. Ullam consectetur exercitationem
              beatae eius recusandae obcaecati, quos neque! Aperiam suscipit
              incidunt ducimus excepturi, reprehenderit eius placeat?
            </p>
            <p className="desc-head">Profile Preferences</p>
            <ul className="desc-item">
              <li>Data Science</li>
              <li>Analytics</li>
              <li>Software Development</li>
            </ul>
            <p className="desc-head">
              General Day/Time Preference for Sessions
            </p>
            <ul className="desc-item">
              <li>Sat(3-5 PM)</li>
              <li>Sun(3-5 PM)</li>
              <li>Web(9 AM - 5PM)</li>
              <li>No Specific Preferences(Only when ticked)</li>
            </ul>
            <div className="dashboard-btns">
              <div className="interviewer">
                <button
                  className="cust-btn dashboard-btn"
                  onClick={() => {
                    navigate("/searching");
                  }}
                >
                  Find an Interviewer
                </button>
                <p className="cont">
                  If you are looking to appear for a Mock Interview of your
                  choice and receive Personalized Feedback
                </p>
                <button className="cust-btn dashboard-btn">
                  Your Mock Interviews
                </button>
                <button className="cust-btn dashboard-btn">
                  Mock Interview Offers
                </button>
              </div>
              <div className="mentor">
                <button className="cust-btn dashboard-btn">
                  Find a Mentor
                </button>
                <p className="cont">
                  If you are looking for a Mentor of your choice
                </p>
                <button className="cust-btn dashboard-btn">
                  Your Mentorship Sessions
                </button>
                <button className="cust-btn dashboard-btn">
                  Mentorship Offers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
