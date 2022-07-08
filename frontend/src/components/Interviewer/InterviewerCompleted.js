import React from "react";

import "./InterviewerCompleted.css";

import InterviewerCompletedNavbar from "./InteriewerCompletedNavbar";

const InterviewerCompleted = () => {
  return (
    <>
      <InterviewerCompletedNavbar />
      <div className="upcoming-interview">
        <div className="inteviews-container"></div>
        <h1>Completed Interviews</h1>
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
                  <p>B.Tech, CSE, MIT</p>
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
                    <button
                      type="button"
                      style={{ backgroundColor: "red" }}
                      className="cust-btn request-sent-btn"
                    >
                      Rate and Review
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

export default InterviewerCompleted;
