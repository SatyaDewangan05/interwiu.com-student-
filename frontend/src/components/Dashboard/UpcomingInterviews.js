import React from "react";
import { useEffect } from "react";

import Navbarlogedin from "./Navbarlogedin";

import "./UpcomingInterviews.css";

const changeLink = () => {
  const links = document.querySelectorAll(".nav-item a");
  links.forEach((link) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active");
    }
    if (link.innerHTML === "Upcoming Interviews") {
      link.classList.add("active");
    }
  });
};

const UpcomingInterviews = () => {
  useEffect(() => {
    changeLink();
  }, []);
  return (
    <>
      <Navbarlogedin />
      <div className="upcoming-interview">
        <div className="inteviews-container"></div>
        <h1>Your Mock Interviews and Feedback Sessions</h1>
        <div className="interview-cont">
          <div className="interviews-list">
            <div className="interview-item">
              <div className="interview-item-profile">
                <img src={require("../../images/photo.png")} alt="Profile" />
                <button className="cust-btn view-btn">View Profile</button>
              </div>
              <div className="interview-item-info">
                <div className="interviewer-head">
                  <h2>John Doe</h2>
                  <p>SDE, Google, California</p>
                </div>
                <div className="time-preference">
                  <p>Interview Slot: 20 June, 2022 [Sun] [5:00PM - 5:45PM]</p>
                </div>
                <div className="time-preference">
                  <p>Profile Preference: Data Science</p>
                </div>
                <div className="search-result-item-btns flex">
                  <div className="flex">
                    <button
                      type="button"
                      style={{ backgroundColor: "green" }}
                      className="cust-btn request-sent-btn"
                    >
                      Confirmed
                    </button>
                    <button
                      type="button"
                      style={{ backgroundColor: "white" }}
                      className="cust-btn join-meeting-btn"
                    >
                      Join Meeting
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="interview-item">
              <div className="interview-item-profile">
                <img src={require("../../images/photo.png")} alt="Profile" />
                <button className="cust-btn view-btn">View Profile</button>
              </div>
              <div className="interview-item-info">
                <div className="interviewer-head">
                  <h2>John Doe</h2>
                  <p>SDE, Google, California</p>
                </div>
                <div className="time-preference">
                  <p>Interview Slot: 20 June, 2022 [Sun] [5:00PM - 5:45PM]</p>
                </div>
                <div className="time-preference">
                  <p>Profile Preference: Data Science</p>
                </div>
                <div className="search-result-item-btns flex">
                  <div className="flex">
                    <button
                      type="button"
                      style={{ backgroundColor: "green" }}
                      className="cust-btn request-sent-btn"
                    >
                      Confirmed
                    </button>
                    <button
                      type="button"
                      style={{ backgroundColor: "white" }}
                      className="cust-btn join-meeting-btn"
                    >
                      Join Meeting
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="interview-item">
              <div className="interview-item-profile">
                <img src={require("../../images/photo.png")} alt="Profile" />
                <button className="cust-btn view-btn">View Profile</button>
              </div>
              <div className="interview-item-info">
                <div className="interviewer-head">
                  <h2>John Doe</h2>
                  <p>SDE, Google, California</p>
                </div>
                <div className="time-preference">
                  <p>Interview Slot: 20 June, 2022 [Sun] [5:00PM - 5:45PM]</p>
                </div>
                <div className="time-preference">
                  <p>Profile Preference: Data Science</p>
                </div>
                <div className="search-result-item-btns flex">
                  <div className="flex">
                    <button
                      type="button"
                      style={{ backgroundColor: "green" }}
                      className="cust-btn request-sent-btn"
                    >
                      Confirmed
                    </button>
                    <button
                      type="button"
                      style={{ backgroundColor: "white" }}
                      className="cust-btn join-meeting-btn"
                    >
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

export default UpcomingInterviews;
