import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router";

import "./SearchInterviews.css";

import Navbarlogedin from "./Navbarlogedin";

const changeLink = () => {
  const links = document.querySelectorAll(".nav-item a");
  links.forEach((link) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active");
    }
    if (link.innerHTML === "Search Interviews") {
      link.classList.add("active");
    }
  });
};

const SearchInterviews = () => {
  // const user = userDetails.user;
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    changeLink();
  }, []);

  const showResult = () => {
    const searchResult = document.querySelector(".search-result-cont");
    searchResult.classList.remove("hide");
  };
  return (
    <>
      <Navbarlogedin />
      <div className="searching">
        <h1>
          Find an Interviewer of your choice for a Mock Interview and Feedback
          Session
        </h1>
        <div className="searching-cont">
          <div className="search-pref">
            <select name="profile" id="profile">
              <option value="" disabled selected hidden>
                Profile Preferences
              </option>
              <option value="ds">Data Science</option>
              <option value="software">Software</option>
              <option value="banking">Banking and Finance</option>
              <option value="consulting">Consulting</option>
              <option value="analytics">Analytics</option>
            </select>
            <div className="charge-limit">
              <p>Charge Limits: </p>
              <div className="below">
                <input type="checkbox" name="charge" id="below" />
                <label htmlFor="below">Below INR</label>
                <input type="number" />
              </div>
              <div className="above">
                <input type="checkbox" name="charge" id="above" />
                <label htmlFor="above">Above INR</label>
                <input type="number" />
              </div>
            </div>
            <input
              type="text"
              placeholder="Desired Organization of Interviewer"
            />
            <div className="preference">
              <label htmlFor="preference">
                Mock Interview Recording Preference:{" "}
              </label>
              <input type="radio" name="preference" id="yes" value={"yes"} />
              <label htmlFor="yes">Yes</label>
              <input type="radio" name="preference" id="no" value={"no"} />
              <label htmlFor="no">No</label>
            </div>
            <div className="time-preference">
              <p>
                Do you want to specify your Scheduling Preference for this
                session?
              </p>
              <ul>
                <li>
                  <label htmlFor="mon">Monday: </label>
                  <input type="time" name="mon" id="mon" />
                </li>
                <li>
                  <label htmlFor="tues">Tuesday: </label>
                  <input type="time" name="tues" id="tues" />
                </li>
                <li>
                  <label htmlFor="wed">Wednesday: </label>
                  <input type="time" name="wed" id="wed" />
                </li>
                <li>
                  <label htmlFor="thur">Thursday: </label>
                  <input type="time" name="thur" id="thur" />
                </li>
                <li>
                  <label htmlFor="fri">Friday: </label>
                  <input type="time" name="fri" id="fri" />
                </li>
                <li>
                  <label htmlFor="sat">Saturday: </label>
                  <input type="time" name="sat" id="sat" />
                </li>
                <li>
                  <label htmlFor="sun">Sunday: </label>
                  <input type="time" name="sun" id="sun" />
                </li>
              </ul>
            </div>
            <button
              type="submit"
              className="cust-btn find-btn"
              onClick={(e) => {
                e.preventDefault();
                showResult();
              }}
            >
              Find Interviewers
            </button>
          </div>
          <div className="search-result">
            <h3>Search result:</h3>
            <div className="search-result-cont">
              <div className="search-result-item">
                <div className="search-result-item-info">
                  <div className="interviewer-head">
                    <h3>John Doe</h3>
                    <p>SDE, Google, California</p>
                  </div>
                  <div className="time-preference">
                    <p>Slots Available: </p>
                    <ul>
                      <li>Sun(5-7 pm)</li>
                      <li>Mon (3-4 pm)</li>
                      <li>Tues(5-7 pm)</li>
                      <li>Wed (3-4 pm)</li>
                      <li>Thur(5-7 pm)</li>
                      <li>Fri (3-4 pm)</li>
                      <li>Sat(5-7 pm)</li>
                    </ul>
                  </div>
                  <p className="price">INR 900</p>
                  <button className="cust-btn request-btn">
                    Request a Mock Interview and Feedback Session
                  </button>
                </div>
                <div className="search-result-item-profile">
                  <img src={require("../../images/photo.png")} alt="Profile" />
                  <button className="cust-btn view-btn">View Profile</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchInterviews;
