import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";

import "./InterviewerDashboard.css";

import Navbarlogedin from "../Dashboard/Navbarlogedin";

const InterviewerDashboard = () => {
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
            <h2>John Doe</h2>
            <h5>
              Software Development Engineer <br /> Google, California
            </h5>
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
              <li>Sat(3-5 PM)</li>
              <li>Sun(3-5 PM)</li>
              <li>Web(9 AM - 5PM)</li>
              <li>No Specific Preferences(Only when ticked)</li>
            </ul>
            <p className="desc-head">Offers</p>
            <div>
              <div className="flex">
                <p>
                  Mock Interview with Feedback Session
                  <span style={{ padding: "0 10px" }}>@</span>
                </p>
                <p>INR 900 only [per Session (30 min)]</p>
              </div>
              <div className="flex">
                <p>
                  Mentorship Session
                  <span style={{ padding: "0 10px" }}>@</span>
                </p>
                <p>INR 1200 only [per Session (45 min)]</p>
              </div>
            </div>
            <div className="dashboard-btns">
              <div className="interviewer">
                <button
                  className="cust-btn dashboard-btn"
                  onClick={() => {
                    navigate("/searching");
                  }}
                >
                  Mock Interview Requests
                </button>
                <button className="cust-btn dashboard-btn">
                  Your Mock Interviews
                </button>
                <button className="cust-btn dashboard-btn">
                  Find an Interviewee
                </button>
                <p className="cont">
                  If you are looking to appear for a Mock Interview of your
                  choice and receive Personalized Feedback
                </p>
              </div>
              <div className="mentor">
                <button className="cust-btn dashboard-btn">
                  Mentorship Request
                </button>
                <button className="cust-btn dashboard-btn">
                  Your Mentorship Session
                </button>
                <button className="cust-btn dashboard-btn">
                  Find a Mentee
                </button>
                <p className="cont">
                  If you are looking for a Mentor of your choice
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterviewerDashboard;
