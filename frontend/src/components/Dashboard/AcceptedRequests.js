import React from "react";

import "./AcceptedRequests.css";

import Navbarlogedin from "./Navbarlogedin";

const AcceptedRequests = () => {
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
      <div className="accepted-request interviews">
        <div className="interviews-container">
          <h2 className="interview-head">Accepted Requests (12)</h2>
          <div className="interviews-cont">
            <div className="interviews-list">
              <div className="sent-item">
                <div className="sent-item-profile">
                  <img src={require("../../images/photo.png")} alt="Profile" />
                  <button className="cust-btn sent-view-btn">
                    View Profile
                  </button>
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
                        <button
                          type="button"
                          className="cust-btn request-accepted-btn"
                        >
                          Pay & Confirm
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
                    <h2>John Doe</h2>
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
                  <div className="time-preference">
                    <p>Interview Slot: 20 June, 2022 [Sun] [5:00PM - 5:45PM]</p>
                  </div>
                  <div className="search-result-item-btns flex">
                    <div className="flex">
                      <button
                        type="button"
                        className="cust-btn request-accepted-btn"
                      >
                        Pay & Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="search-result-item">
                <div className="search-result-item-head flex">
                  <div className="interviewer-head">
                    <h3>John Doe</h3>
                    <p>SDE, Google, California</p>
                  </div>
                  <div className="search-result-item-profile">
                    <img
                      src={require("../../images/photo.png")}
                      alt="Profile"
                    />
                    <button className="cust-btn view-btn">View Profile</button>
                  </div>
                </div>
                <div className="search-result-item-desc">
                  <div className="time-preference">
                    <p>Slots Available: </p>
                    <ul className="slot-list">
                      <li>Sun (5-7 pm)</li>
                      <li>Mon (3-4 pm)</li>
                      <li>Tues (5-7 pm)</li>
                      <li>Wed (3-4 pm)</li>
                      <li>Thur(5-7 pm)</li>
                      <li>Fri (3-4 pm)</li>
                      <li>Sat (5-7 pm)</li>
                    </ul>
                  </div>
                  <div className="search-result-item-btns flex">
                    <button type="button" className="cust-btn request-btn">
                      Request a Mock Interview and Feedback Session
                    </button>
                    <p className="price">INR 900</p>
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

export default AcceptedRequests;
