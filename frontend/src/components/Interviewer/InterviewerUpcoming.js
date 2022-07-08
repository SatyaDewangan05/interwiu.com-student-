import React from "react";

import "./InterviewerUpcoming.css";
import Navbarlogedin from "../Dashboard/Navbarlogedin";
import InterviewerUpcomingNavbar from "./InterviewerUpcomingNavbar";

const InterviewerUpcoming = () => {
  return (
    <>
      <InterviewerUpcomingNavbar />
      <div className="upcoming-interview">
        <div className="inteviews-container"></div>
        <h1>Your Mock Interviews and Feedback Sessions</h1>
        <div className="interview-cont">
          <div className="interviews-list">
            <div className="interview-item">
              <div
                className="interview-item-profile"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <img src={require("../../images/photo.png")} alt="Profile" />
                <a
                  src="#"
                  style={{
                    textDecorationLine: "blink",
                    cursor: "pointer",
                    marginTop: "0px",
                    marginRight: "45px",
                  }}
                  className="hover-animation"
                >
                  View Profile
                </a>
                <a
                  src="#"
                  style={{
                    textDecorationLine: "blink",
                    cursor: "pointer",
                    marginTop: "0px",
                    marginRight: "60px",
                  }}
                  className="hover-animation"
                >
                  Resume
                </a>
              </div>
              <div className="interview-item-info">
                <div className="interviewer-head">
                  <h2>John Doe</h2>
                  <p>B.Tech</p>
                  <p>Computer Science Engineering</p>
                  <p>MIT, Cambrige, USA</p>
                </div>
                <div className="details flex">
                  <div className="detail">
                    <p className="detail-head">Profile</p>
                    <p className="detail-body">Data Science</p>
                  </div>
                  <div className="detail">
                    <p className="detail-head">Session Duration</p>
                    <p className="detail-body">45 Min</p>
                  </div>
                  <div className="detail">
                    <p className="detail-head">Interview Slot</p>
                    <p className="detail-body">[5:00PM - 5:45PM]</p>
                    <p className="detail-body">20 June, 2022</p>
                  </div>
                </div>
                <div className="search-result-item-btns flex">
                  <div className="flex">
                    <button type="button" className="cust-btn join-meeting-btn">
                      Join Meeting
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="interview-item">
              <div
                className="interview-item-profile"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <img src={require("../../images/photo.png")} alt="Profile" />
                <a
                  src="#"
                  style={{
                    textDecorationLine: "blink",
                    cursor: "pointer",
                    marginTop: "0px",
                    marginRight: "45px",
                  }}
                  className="hover-animation"
                >
                  View Profile
                </a>
                <a
                  src="#"
                  style={{
                    textDecorationLine: "blink",
                    cursor: "pointer",
                    marginTop: "0px",
                    marginRight: "60px",
                  }}
                  className="hover-animation"
                >
                  Resume
                </a>
              </div>
              <div className="interview-item-info">
                <div className="interviewer-head">
                  <h2>John Doe</h2>
                  <p>B.Tech</p>
                  <p>Computer Science Engineering</p>
                  <p>MIT, Cambrige, USA</p>
                </div>
                <div className="details flex">
                  <div className="detail">
                    <p className="detail-head">Profile</p>
                    <p className="detail-body">Data Science</p>
                  </div>
                  <div className="detail">
                    <p className="detail-head">Session Duration</p>
                    <p className="detail-body">45 Min</p>
                  </div>
                  <div className="detail">
                    <p className="detail-head">Interview Slot</p>
                    <p className="detail-body">[5:00PM - 5:45PM]</p>
                    <p className="detail-body">20 June, 2022</p>
                  </div>
                </div>
                <div className="search-result-item-btns flex">
                  <div className="flex">
                    <button type="button" className="cust-btn join-meeting-btn">
                      Join Meeting
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="interview-item">
              <div
                className="interview-item-profile"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <img src={require("../../images/photo.png")} alt="Profile" />
                <a
                  src="#"
                  style={{
                    textDecorationLine: "blink",
                    cursor: "pointer",
                    marginTop: "0px",
                    marginRight: "45px",
                  }}
                  className="hover-animation"
                >
                  View Profile
                </a>
                <a
                  src="#"
                  style={{
                    textDecorationLine: "blink",
                    cursor: "pointer",
                    marginTop: "0px",
                    marginRight: "60px",
                  }}
                  className="hover-animation"
                >
                  Resume
                </a>
              </div>
              <div className="interview-item-info">
                <div className="interviewer-head">
                  <h2>John Doe</h2>
                  <p>B.Tech</p>
                  <p>Computer Science Engineering</p>
                  <p>MIT, Cambrige, USA</p>
                </div>
                <div className="details flex">
                  <div className="detail">
                    <p className="detail-head">Profile</p>
                    <p className="detail-body">Data Science</p>
                  </div>
                  <div className="detail">
                    <p className="detail-head">Session Duration</p>
                    <p className="detail-body">45 Min</p>
                  </div>
                  <div className="detail">
                    <p className="detail-head">Interview Slot</p>
                    <p className="detail-body">[5:00PM - 5:45PM]</p>
                    <p className="detail-body">20 June, 2022</p>
                  </div>
                </div>
                <div className="search-result-item-btns flex">
                  <div className="flex">
                    <button type="button" className="cust-btn join-meeting-btn">
                      Join Meeting
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterviewerUpcoming;
