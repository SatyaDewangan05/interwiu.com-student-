import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import axios from "axios";
import "./SearchInterviews.css";

import Navbarlogedin from "./Navbarlogedin";
import MockRequest from "./MockRequest";

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
  const [cards, setCards] = React.useState();
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(
        "http://localhost:8585/send/interviewersdemo"
      );
      setCards(req.data);
    }
    fetchData();
  }, []);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    changeLink();
  }, []);

  const [expanded, setExpanded] = useState(true);

  const showCheckboxes = () => {
    var checkboxes = document.getElementById("checkboxes");
    if (expanded) {
      checkboxes.style.display = "block";
      setExpanded(false);
    } else {
      checkboxes.style.display = "none";
      setExpanded(true);
    }
  };

  const [days, setDays] = useState({});

  const handleDaysChange = (e) => {
    const day = e.target.id;
    const bolValue = e.target.checked;
    setDays({ ...days, [day]: bolValue });
  };

  const [time, setTime] = useState({});

  const handleTimeChange = (e) => {
    const timing = e.target.id;
    setTime({ ...time, [timing]: e.target.value });
  };

  const showResult = () => {
    const searchResult = document.querySelector(".search-result-cont");
    searchResult.classList.remove("hide");
  };
  return (
    <>
      <Navbarlogedin />
      <MockRequest />
      <div className="searching">
        <h1>
          Find an Interviewer of your choice for a Mock Interview with Feedback
          Session
        </h1>
        <div className="searching-cont">
          <div className="search-pref">
            {/* <div className="as-per flex">
              <input type="checkbox" name="pref" id="pref" />
              <label htmlFor="pref">
                As per my <span style={{ color: "#1265a8" }}>Preference</span>{" "}
              </label>
            </div> */}
            <label htmlFor="profile">Profile Preference</label>
            <select name="profile" id="profile">
              <option value="" disabled selected hidden>
                Select Profile
              </option>
              <option value="ds">Data Science</option>
              <option value="software">Software</option>
              <option value="banking">Banking and Finance</option>
              <option value="consulting">Consulting</option>
              <option value="analytics">Analytics</option>
            </select>
            <div className="charge-limit">
              <h4>Charge Limits </h4>
              <div className="below flex">
                <input type="checkbox" name="charge" id="below" />
                <label htmlFor="below">Below INR</label>
                <input
                  type="number"
                  defaultValue={"500"}
                  className="charge-limit-box"
                />
              </div>
              <div className="above flex">
                <input type="checkbox" name="charge" id="above" />
                <label htmlFor="above">Above INR</label>
                <input
                  type="number"
                  defaultValue={"2000"}
                  className="charge-limit-box"
                />
              </div>
            </div>
            <div className="org">
              <label htmlFor="org">Desired Organization of Interviewer</label>
              <input
                type="text"
                id="org"
                placeholder="Name of the Organization"
              />
            </div>
            <div className="time-preference">
              <div className="element">
                <p style={{ textAlign: "justify" }}>
                  Do you want to specify your Scheduling Preferences for this
                  mock interview (with feedback) session?
                </p>
                <div className="element-item">
                  <input type="checkbox" name="preference" id="preference" />
                  <label htmlFor="preference"> No Specific Preferences</label>
                </div>
                <div className="pref-item">
                  <ul>
                    <li>
                      Monday - 12:00 to 13:00{" "}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.target.parentElement.parentElement.remove();
                        }}
                        className="cust-btn trash-btn"
                      >
                        <i class="fa-solid fa-trash-can"></i>
                      </button>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  className="cust-btn search-add-time-btn"
                  onClick={() => {
                    const addPref = document.querySelector(".popup");
                    addPref.classList.remove("hide");
                  }}
                >
                  <span style={{ fontSize: "24px", margin: "5px 5px" }}>+</span>{" "}
                  Add Time Preference
                </button>
              </div>
              <div className="popup hide">
                <button
                  type="button"
                  className="cust-btn close-btn"
                  onClick={() => {
                    const addPref = document.querySelector(".popup");
                    addPref.classList.add("hide");
                  }}
                >
                  <i className="fa-solid fa-circle-xmark"></i>
                </button>

                {/* ------------------------- */}
                <div className="select flex">
                  <div class="multiselect">
                    <h5>Choose the days</h5>
                    <div
                      class="selectBox"
                      onClick={() => {
                        showCheckboxes();
                      }}
                    >
                      <select>
                        <option>Select Days</option>
                      </select>
                      <div class="overSelect"></div>
                    </div>
                    <div id="checkboxes">
                      <label for="monday">
                        <input
                          type="checkbox"
                          checked={days["monday"] || false}
                          onChange={handleDaysChange}
                          id="monday"
                        />
                        Monday
                      </label>
                      <label for="tuesday">
                        <input
                          type="checkbox"
                          checked={days["tuesday"] || false}
                          onChange={handleDaysChange}
                          id="tuesday"
                        />
                        Tuesday
                      </label>
                      <label for="wednesday">
                        <input
                          type="checkbox"
                          checked={days["wednesday"] || false}
                          onChange={handleDaysChange}
                          id="wednesday"
                        />
                        Wednesday
                      </label>
                      <label for="thursday">
                        <input
                          type="checkbox"
                          checked={days["thursday"] || false}
                          onChange={handleDaysChange}
                          id="thursday"
                        />
                        Thrusday
                      </label>
                      <label for="friday">
                        <input
                          type="checkbox"
                          checked={days["friday"] || false}
                          onChange={handleDaysChange}
                          id="friday"
                        />
                        Friday
                      </label>
                      <label for="saturday">
                        <input
                          type="checkbox"
                          checked={days["saturday"] || false}
                          onChange={handleDaysChange}
                          id="saturday"
                        />
                        Saturday
                      </label>
                      <label for="sunday">
                        <input
                          type="checkbox"
                          checked={days["sunday"] || false}
                          onChange={handleDaysChange}
                          id="sunday"
                        />
                        Sunday
                      </label>
                      <label for="custom">
                        <input
                          type="checkbox"
                          checked={days["custom"] || false}
                          onChange={handleDaysChange}
                          id="custom"
                        />
                        Custom
                      </label>
                    </div>
                  </div>
                  {/* -------------------- */}
                  <div className="time">
                    <h5>Choose Time</h5>
                    <div className="flex">
                      <div>
                        <label htmlFor="from">From</label>
                        <input
                          type="time"
                          value={time["from"] || "00:00"}
                          onChange={handleTimeChange}
                          name="from"
                          id="from"
                        />
                      </div>
                      <div>
                        <label htmlFor="to">To</label>
                        <input
                          type="time"
                          name="to"
                          value={time["to"] || "00:00"}
                          onChange={handleTimeChange}
                          id="to"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    console.log(
                      "Days: " +
                        JSON.stringify(days) +
                        "Time: " +
                        JSON.stringify(time)
                    );
                    const addPref = document.querySelector(".popup");
                    addPref.classList.add("hide");
                  }}
                  className="cust-btn add-btn"
                >
                  Add
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="cust-btn find-btn"
              onClick={(e) => {
                e.preventDefault();
                showResult();
              }}
            >
              Apply Preference
            </button>
          </div>
          <div className="search-result">
            <h3>Search result</h3>
            <div className="search-result-cont">
              {cards?.map((result) => (
                <div className="search-result-item">
                  <div className="search-result-item-head flex">
                    <div className="interviewer-head">
                      <h3>{result.name}</h3>
                      <p>{result.desg}</p>
                    </div>
                    <div className="search-result-item-profile">
                      <img
                        src={require("../../images/photo.png")}
                        alt="Profile"
                      />
                      <button className="cust-btn view-btn">
                        View Profile
                      </button>
                    </div>
                  </div>
                  <div className="search-result-item-desc">
                    <div className="time-preference">
                      <p>Slots Available: </p>
                      <ul className="slot-list">
                        <li>Sun (5-7 pm)</li>
                        <li>Mon (6-4 pm)</li>
                        <li>Tues (2-8 pm)</li>
                        <li>Wed (3-4 pm)</li>
                        <li>Thur(5-7 pm)</li>
                        <li>Fri (3-4 pm)</li>
                        <li>Sat (5-7 pm)</li>
                      </ul>
                    </div>
                    <div className="time-preference">
                      <p>Profile Preference: </p>
                      <ul className="slot-list">
                        <li>Data Science</li>
                      </ul>
                    </div>
                    <div className="search-result-item-btns flex">
                      <button type="button" className="cust-btn request-btn">
                        Request a Mock Interview and Feedback Session
                      </button>
                      <p className="price">INR {result.price}</p>
                    </div>
                  </div>
                </div>
              ))}

              {cards?.map((result) => (
                <div className="search-result-item">
                  <div className="search-result-item-head flex">
                    <div>
                      <div className="interviewer-head">
                        <h3>{result.name}</h3>
                        <p>{result.desg}</p>
                      </div>
                      <div className="details flex">
                        <div className="detail">
                          <p className="detail-head">Profile</p>
                          <p className="detail-body">Data Science</p>
                        </div>
                        <div className="detail">
                          <p className="detail-head">Price</p>
                          <p className="detail-body">INR {result.price}</p>
                        </div>
                        <div className="detail">
                          <p className="detail-head">Session Duration</p>
                          <p className="detail-body">30 Min</p>
                        </div>
                      </div>
                    </div>
                    <div className="search-result-item-profile">
                      <img
                        src={require("../../images/photo.png")}
                        alt="Profile"
                      />
                      <button
                        className="cust-btn view-btn"
                        onClick={() => {
                          navigate("/interviewer-dashboard");
                        }}
                      >
                        View Profile
                      </button>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchInterviews;
