import React from "react";

import "./InterviewerRequest.css";

import Navbarlogedin from "../Dashboard/Navbarlogedin";

const InterviewerRequest = () => {
  return (
    <>
      <Navbarlogedin />
      <div className="interviews">
        <div className="interviews-container">
          <h1>Mock Interview Request from Students</h1>
          <div className="interviews-cont">
            <div className="interviews-list">
              <div className="interview-item">
                <div className="interview-item-profile">
                  <img src={require("../../images/photo.png")} alt="Profile" />
                  <button className="cust-btn view-btn">View Profile</button>
                </div>
                <div className="interview-item-info">
                  <div className="interviewer-head">
                    <h2>John Doe</h2>
                    <p>B.Tech</p>
                    <p>Computer Science Engineering</p>
                    <p>MIT, Cambrige, USA</p>
                  </div>
                  <div className="time-preference">
                    <p>Interview Slot: 20 June, 2022 [Sun] [5:00PM - 5:45PM]</p>
                  </div>
                  <div className="time-preference">
                    <p>Profile: Data Science</p>
                  </div>
                  <div className="search-result-item-btns flex">
                    <div className="flex">
                      <button
                        type="button"
                        className="cust-btn request-sent-btn"
                        style={{ backgroundColor: "green" }}
                      >
                        Accept
                      </button>
                      <button
                        type="button"
                        className="cust-btn request-accepted-btn"
                        style={{ backgroundColor: "red" }}
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="interviews-else">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                sapiente architecto, deserunt obcaecati illo soluta alias at
                dolore, libero quia necessitatibus animi autem ab! Ipsa
                veritatis perferendis magni? Ad, facere!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterviewerRequest;
