import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";

import Navbarlogedin from "./Navbarlogedin";

import "./Dashboard.css";
const Dashboard = (userDetails) => {
  const user = userDetails.user;
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  let navigate = useNavigate();
  return (
    <>
      <Navbarlogedin />
      <div className="dashboard">
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
            <h2>{user.username}</h2>
            <h5>
              B.Tech <br /> Computer Science Engineering <br /> MIT, Cambridge,
              MA 02139, United States
            </h5>
            <button className="cust-btn resume-btn">
              <a
                href={require("../../images/satyaprakash_generated_resume.pdf")}
                target="_black"
                className="resume-a"
              >
                <i class="fa-solid fa-link"></i> Resume
              </a>
            </button>
            {/* <p>Session Recording Proference: Yes</p> */}
          </div>
          <div className="dashboard-desc">
            <h1 className="head">My Dashboard</h1>
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
              <li>Sat (3-5 PM)</li>
              <li>Sun (3-5 PM)</li>
              <li>Wed (9 AM - 5PM)</li>
              <li>No Specific Preferences (Only when ticked)</li>
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
              </div>
              {/* <div className="mentor">
                <button className="cust-btn dashboard-btn">
                  Find a Mentor
                </button>
                <p className="cont">
                  If you are looking for a Mentor of your choice
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
