import React from "react";
import { useEffect } from "react";

import Navbarlogedin from "./Navbarlogedin";

import "./PendingRequests.css";

const changeLink = () => {
  const links = document.querySelectorAll(".nav-item a");
  links.forEach((link) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active");
    }
    if (link.innerHTML === "Pending Requests") {
      link.classList.add("active");
    }
  });
};

const PendingRequests = () => {
  useEffect(() => {
    changeLink();
  }, []);
  return (
    <>
      <Navbarlogedin />
      <div className="interview">
        <h1>Your Mock Interviews and Feedback Sessions</h1>
        <div className="interview-cont">
          <div className="interviews">
            <div className="col-20">
              <img src={require("../../images/photo.png")} alt="" />
            </div>
            <div className="col-80">
              <div>
                <h3>John Doe</h3>
                <p>Sr. Manager, Intel, Bangalore</p>
              </div>
              <div>
                <h4>Charges: INR 1200 ONLY</h4>
                <p>Sun(5:00pm-5:30pm)</p>
              </div>
              <h4>Profile: Data Science</h4>
              <button className="cust-btn request-btn">Request Sent</button>
            </div>
          </div>
          <div className="interviews">
            <div className="col-20">
              <img src={require("../../images/photo.png")} alt="" />
            </div>
            <div className="col-80">
              <div>
                <h3>John Doe</h3>
                <p>Sr. Manager, Intel, Bangalore</p>
              </div>
              <div>
                <h4>Charges: INR 1200 ONLY</h4>
                <p>Sun(5:00pm-5:30pm)</p>
              </div>
              <h4>Profile: Data Science</h4>
              <button className="cust-btn request-btn">Request Sent</button>
            </div>
          </div>
          <div className="interviews">
            <div className="col-20">
              <img src={require("../../images/photo.png")} alt="" />
            </div>
            <div className="col-80">
              <div>
                <h3>John Doe</h3>
                <p>Sr. Manager, Intel, Bangalore</p>
              </div>
              <div>
                <h4>Charges: INR 1200 ONLY</h4>
                <p>Sun(5:00pm-5:30pm)</p>
              </div>
              <h4>Profile: Data Science</h4>
              <button className="cust-btn request-btn">Request Sent</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingRequests;
