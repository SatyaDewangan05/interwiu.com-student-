import React from "react";
import { useEffect } from "react";

import Navbarlogedin from "./Navbarlogedin";

import "./UpcomingInterviews.css";

// const changeLink = () => {
//   const links = document.querySelectorAll(".nav-item a");
//   links.forEach((link) => {
//     if (link.classList.contains("active")) {
//       link.classList.remove("active");
//     }
//     if (link.innerHTML === "Upcoming Interviews") {
//       link.classList.add("active");
//     }
//   });
// };

const UpcomingInterviews = () => {
  // useEffect(() => {
  //   changeLink();
  // }, []);
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);
    if (currentScrollPos >= 104) {
      document.querySelector(".interview-head").style.position = "sticky";
      document.querySelector(".interview-head").style.top = "0";
    } else {
      document.querySelector(".interview-head").style.position = "unset";
      document.querySelector(".interview-head").style.top = "0";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <>
      <Navbarlogedin />
      <div className="upcoming-interview">
        <div className="interviews-container"></div>
        <h2 className="interview-head">Upcoming Interviews (12)</h2>
        <div className="interview-cont">
          <div className="interviews-list">
            <div className="sent-item">
              <div className="sent-item-profile">
                <img src={require("../../images/photo.png")} alt="Profile" />
                <button className="cust-btn sent-view-btn">View Profile</button>
              </div>
              <div className="sent-item-info">
                <div className="sent-item-head">
                  <div>
                    <div className="sent-item-name flex">
                      <div className="interviewer-head">
                        <h4>John Doe</h4>
                        <p>SDE, Amazon, San Francisco</p>
                      </div>
                      <div className="interviewer-logo">
                        <img
                          src={require("../../images/amazon.png")}
                          alt="google"
                        />
                      </div>
                    </div>
                    <div className="details flex">
                      <div className="detail">
                        <p className="detail-head">Profile</p>
                        <p className="detail-body">Data Science</p>
                      </div>
                      <div className="detail">
                        <p className="detail-head">Price</p>
                        <p className="detail-body">INR 1200</p>
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
                    <div className="sent-item-btns flex">
                      <div className="meeting-id">
                        Mock Interview ID: #342B14CD9
                      </div>
                      <button
                        type="button"
                        className="cust-btn join-meeting-btn"
                      >
                        Join Meeting
                      </button>
                    </div>
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
                  <h3>John Doe</h3>
                  <p>SDE, Google, California</p>
                </div>
                <div className="details flex">
                  <div className="detail">
                    <p className="detail-head">Profile</p>
                    <p className="detail-body">Data Science</p>
                  </div>
                  <div className="detail">
                    <p className="detail-head">Price</p>
                    <p className="detail-body">INR 900</p>
                  </div>
                  <div className="detail">
                    <p className="detail-head">Session Duration</p>
                    <p className="detail-body">30 Min</p>
                  </div>
                  <div className="detail">
                    <p className="detail-head">Interview Slot</p>
                    <p className="detail-body">[5:00PM - 5:45PM]</p>
                    <p className="detail-body">20 June, 2022</p>
                  </div>
                </div>
                {/* <div className="time-preference">
                  <p>Interview Slot: 20 June, 2022 [Sun] [5:00PM - 5:45PM]</p>
                </div> */}
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
              <div className="interview-item-profile">
                <img src={require("../../images/photo.png")} alt="Profile" />
                <button className="cust-btn view-btn">View Profile</button>
              </div>
              <div className="interview-item-info">
                <div className="interviewer-head">
                  <h3>John Doe</h3>
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
                    <button type="button" className="cust-btn join-meeting-btn">
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
                  <h3>John Doe</h3>
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

export default UpcomingInterviews;
