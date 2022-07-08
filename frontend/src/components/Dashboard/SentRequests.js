import React from "react";
import { useEffect } from "react";

import Navbarlogedin from "./Navbarlogedin";
import CancelRequest from "./popups/CancelRequest";
import SentRequest from "./cards/SentRequest";

import "./SentRequests.css";

// const changeLink = () => {
//   const links = document.querySelectorAll(".nav-item a p");
//   links.forEach((link) => {
//     if (link.classList.contains("active")) {
//       link.classList.remove("active");
//     }
//     if (link.innerHTML === "Sent Requests") {
//       link.classList.add("active");
//     }
//   });
// };

const SentRequests = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);
    if (currentScrollPos >= 104) {
      document.querySelector(".interview-head").style.position = "sticky";
      document.querySelector(".interview-head").style.top = "-5px";
    } else {
      document.querySelector(".interview-head").style.position = "unset";
      document.querySelector(".interview-head").style.top = "0";
    }
    prevScrollpos = currentScrollPos;
  };

  // useEffect(() => {
  //   changeLink();
  // }, []);
  return (
    <>
      <Navbarlogedin />
      <CancelRequest />
      <div className="sent-request interviews">
        <div className="interviews-container">
          <h2 className="interview-head my-4 text-2xl font-medium">
            Sent Requests (12)
          </h2>
          <div className="interviews-cont">
            <div className="interviews-list">
              <SentRequest />
              {/* <div className="interview-item-container">
                <div className="interview-item">
                  <div className="interview-item-profile">
                    <img
                      src={require("../../images/photo.png")}
                      alt="Profile"
                    />
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
                  </div>
                </div>
                <div className="interview-item-btns flex">
                  <button className="cust-btn view-btn">View Profile</button>
                  <button
                    type="button"
                    className="cust-btn request-sent-btn"
                  ></button>
                </div>
              </div> */}
              <div className="sent-item my-2 p-2">
                <div className="sent-item-profile">
                  <img src={require("../../images/photo.png")} alt="Profile" />
                  <button className="cust-btn sent-view-btn">
                    View Profile
                  </button>
                </div>
                <div className="sent-item-info">
                  <div className="sent-item-head">
                    <div>
                      <div className="flex py-1 justify-between w-full">
                        <div className="interviewer-logo">
                          <img
                            src={require("../../images/amazon.png")}
                            alt="google"
                          />
                        </div>
                        <div>
                          <div>
                            <h4 className="text-2xl font-medium leading-4">
                              John Doe
                            </h4>
                            <p>SDE, Amazon, San Francisco</p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="head-icon flex">
                            <i class="fa-solid fa-bookmark"></i>
                          </div>
                          <div className="head-icon flex">
                            <i class="fa-solid fa-share"></i>
                          </div>
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
                      <div className="sent-item-btns flex justify-center">
                        <p className="text-green-700 font-medium text-lg border-2  px-2 py-1 rounded">
                          <i class="fa-solid fa-check"></i> Request Sent
                        </p>
                        <div className="cancel-dropdown-cont">
                          <div className="cancel-dropdown flex">
                            <i class="fa-solid fa-caret-right"></i>
                          </div>
                          <button
                            className="cust-btn cancel-btn"
                            onClick={() => {
                              document.querySelector(
                                ".cancel-popup"
                              ).style.visibility = "visible";
                            }}
                          >
                            Cancel Request
                          </button>
                        </div>
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
                  <div>
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
                  </div>
                  <div className="search-result-item-btns flex">
                    <button type="button" className="cust-btn request-sent-btn">
                      Request Sent
                    </button>
                    <div className="cancel-dropdown flex">
                      <i className="fa-solid fa-caret-down"></i>
                    </div>
                    <button
                      className="cust-btn cancel-btn"
                      onClick={() => {
                        document.querySelector(
                          ".cancel-popup"
                        ).style.visibility = "visible";
                      }}
                    >
                      Cancel Request
                    </button>
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

export default SentRequests;
