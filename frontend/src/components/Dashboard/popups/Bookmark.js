import React from "react";
import { Link } from "react-router-dom";

import "./Bookmark.css";

const Bookmark = () => {
  return (
    <div className="bookmark">
      <div className="bookmark-container">
        <h2>Bookmarked Interviewers</h2>
        <div
          className="desc-cross"
          onClick={() => {
            document.querySelector(".bookmark").style.visibility = "hidden";
          }}
        >
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
        <div className="bookmark-item">
          <div className="search-result-item">
            <div className="search-result-item-head">
              <div>
                <div className="flex">
                  <div className="interviewer-logo">
                    <img
                      src={require("../../../images/google.png")}
                      alt="google"
                    />
                  </div>
                  <div className="interviewer-head">
                    <div className="flex">
                      <h4>John Doe</h4>
                      <div className="head-icon flex">
                        <i class="fa-solid fa-bookmark"></i>
                      </div>
                      <div className="head-icon flex">
                        <i class="fa-solid fa-share"></i>
                      </div>
                    </div>
                    <p>SDE, Amazon, San Francisco</p>
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
                </div>
              </div>
              <div className="search-result-item-profile">
                <img src={require("../../../images/photo.png")} alt="Profile" />
                <Link className="search-view-btn" to="#">
                  View Profile
                </Link>
              </div>
            </div>
            <div className="search-result-item-desc">
              <div className="time-preference">
                <p>Slots Available </p>
                <ul className="slot-list">
                  <li>Sun (5-7 pm)</li>
                  <li>Mon (3-4 pm)</li>
                  <li>Tue (5-7 pm)</li>
                  <li>Wed (3-4 pm)</li>
                  <li>Thur(5-7 pm)</li>
                  <li>Fri (3-4 pm)</li>
                  <li>Sat (5-7 pm)</li>
                </ul>
              </div>
              <div className="search-result-item-btns flex">
                <button
                  type="button"
                  onClick={() => {
                    const requestPopup = document.querySelector(
                      ".mock-request-popup-container"
                    );
                    requestPopup.classList.remove("hide");
                  }}
                  className="cust-btn request-btn"
                >
                  Request a Mock Interview with Feedback Session
                </button>
              </div>
            </div>
          </div>
          <div className="search-result-item">
            <div className="search-result-item-head">
              <div>
                <div className="flex">
                  <div className="interviewer-logo">
                    <img
                      src={require("../../../images/google.png")}
                      alt="google"
                    />
                  </div>
                  <div className="interviewer-head">
                    <div className="flex">
                      <h4>John Doe</h4>
                      <div className="head-icon flex">
                        <i class="fa-solid fa-bookmark"></i>
                      </div>
                      <div className="head-icon flex">
                        <i class="fa-solid fa-share"></i>
                      </div>
                    </div>
                    <p>SDE, Amazon, San Francisco</p>
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
                </div>
              </div>
              <div className="search-result-item-profile">
                <img src={require("../../../images/photo.png")} alt="Profile" />
                <Link className="search-view-btn" to="#">
                  View Profile
                </Link>
              </div>
            </div>
            <div className="search-result-item-desc">
              <div className="time-preference">
                <p>Slots Available </p>
                <ul className="slot-list">
                  <li>Sun (5-7 pm)</li>
                  <li>Mon (3-4 pm)</li>
                  <li>Tue (5-7 pm)</li>
                  <li>Wed (3-4 pm)</li>
                  <li>Thur(5-7 pm)</li>
                  <li>Fri (3-4 pm)</li>
                  <li>Sat (5-7 pm)</li>
                </ul>
              </div>
              <div className="search-result-item-btns flex">
                <button
                  type="button"
                  onClick={() => {
                    const requestPopup = document.querySelector(
                      ".mock-request-popup-container"
                    );
                    requestPopup.classList.remove("hide");
                  }}
                  className="cust-btn request-btn"
                >
                  Request a Mock Interview with Feedback Session
                </button>
              </div>
            </div>
          </div>
          <div className="search-result-item">
            <div className="search-result-item-head">
              <div>
                <div className="flex">
                  <div className="interviewer-logo">
                    <img
                      src={require("../../../images/google.png")}
                      alt="google"
                    />
                  </div>
                  <div className="interviewer-head">
                    <div className="flex">
                      <h4>John Doe</h4>
                      <div className="head-icon flex">
                        <i class="fa-solid fa-bookmark"></i>
                      </div>
                      <div className="head-icon flex">
                        <i class="fa-solid fa-share"></i>
                      </div>
                    </div>
                    <p>SDE, Amazon, San Francisco</p>
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
                </div>
              </div>
              <div className="search-result-item-profile">
                <img src={require("../../../images/photo.png")} alt="Profile" />
                <Link className="search-view-btn" to="#">
                  View Profile
                </Link>
              </div>
            </div>
            <div className="search-result-item-desc">
              <div className="time-preference">
                <p>Slots Available </p>
                <ul className="slot-list">
                  <li>Sun (5-7 pm)</li>
                  <li>Mon (3-4 pm)</li>
                  <li>Tue (5-7 pm)</li>
                  <li>Wed (3-4 pm)</li>
                  <li>Thur(5-7 pm)</li>
                  <li>Fri (3-4 pm)</li>
                  <li>Sat (5-7 pm)</li>
                </ul>
              </div>
              <div className="search-result-item-btns flex">
                <button
                  type="button"
                  onClick={() => {
                    const requestPopup = document.querySelector(
                      ".mock-request-popup-container"
                    );
                    requestPopup.classList.remove("hide");
                  }}
                  className="cust-btn request-btn"
                >
                  Request a Mock Interview with Feedback Session
                </button>
              </div>
            </div>
          </div>
          <div className="search-result-item">
            <div className="search-result-item-head">
              <div>
                <div className="flex">
                  <div className="interviewer-logo">
                    <img
                      src={require("../../../images/google.png")}
                      alt="google"
                    />
                  </div>
                  <div className="interviewer-head">
                    <div className="flex">
                      <h4>John Doe</h4>
                      <div className="head-icon flex">
                        <i class="fa-solid fa-bookmark"></i>
                      </div>
                      <div className="head-icon flex">
                        <i class="fa-solid fa-share"></i>
                      </div>
                    </div>
                    <p>SDE, Amazon, San Francisco</p>
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
                </div>
              </div>
              <div className="search-result-item-profile">
                <img src={require("../../../images/photo.png")} alt="Profile" />
                <Link className="search-view-btn" to="#">
                  View Profile
                </Link>
              </div>
            </div>
            <div className="search-result-item-desc">
              <div className="time-preference">
                <p>Slots Available </p>
                <ul className="slot-list">
                  <li>Sun (5-7 pm)</li>
                  <li>Mon (3-4 pm)</li>
                  <li>Tue (5-7 pm)</li>
                  <li>Wed (3-4 pm)</li>
                  <li>Thur(5-7 pm)</li>
                  <li>Fri (3-4 pm)</li>
                  <li>Sat (5-7 pm)</li>
                </ul>
              </div>
              <div className="search-result-item-btns flex">
                <button
                  type="button"
                  onClick={() => {
                    const requestPopup = document.querySelector(
                      ".mock-request-popup-container"
                    );
                    requestPopup.classList.remove("hide");
                  }}
                  className="cust-btn request-btn"
                >
                  Request a Mock Interview with Feedback Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
