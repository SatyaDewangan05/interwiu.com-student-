import React from "react";

import "./InterviewerRequest.css";

import Navbarlogedin from "../Dashboard/Navbarlogedin";
import InterviewerRequestNavbar from "./InterviewerRequestNavbar";

const InterviewerRequest = () => {
  return (
    <>
      <InterviewerRequestNavbar />
      <div className="interviews">
        <div className="interviews-container">
          <h1>Mock Interview Request from Students</h1>
          <div className="interviews-cont">
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
                      marginTop: "-30px",
                      marginRight: "50px",
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
                      marginRight: "65px",
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
