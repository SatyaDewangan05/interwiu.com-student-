import React from "react";
import { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import "./InterviewerProfileForm.css";

import Navbarlogedin from "../Dashboard/Navbarlogedin";

const InterviewerProfileForm = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  // let navigate = useNavigate();

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
  // const arrayDays = JSON.stringify(days);
  // console.log(arrayDays);

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

  const [list, setList] = useState([]);

  const [inputs, setInputs] = useState({
    dfname: "",
    dlname: "",
    email: "",
    mobNumber: "",
    message: "",
    org: "",
    location: "",
    profilePreference: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      dfname: inputs.dfname,
      dlname: inputs.dlname,
      email: inputs.email,
      mobNumber: inputs.mobNumber,
      org: inputs.org,
      location: inputs.location,
      profilePreference: inputs.profilePreference,
    };
  };

  return (
    <>
      <Navbarlogedin />
      <div className="profile-form">
        <h1>Create An Account As A Professional</h1>
        <form onSubmit={handleSubmit}>
          {/* Profile Form Container */}

          <div className="profile-form-cont">
            {/* Col-70 */}

            <div className="profile-form-text">
              {/* First Name and Last Name */}

              <div className="name cust-row flex">
                <div className="element">
                  <label htmlFor="firstname">
                    First Name<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="dfname"
                    required
                    value={inputs.dfname || ""}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                </div>
                <div className="element">
                  <label htmlFor="lastname">
                    Last Name<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="dlname"
                    value={inputs.dlname}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                </div>
              </div>

              {/* Email and Mobile Number */}

              <div className="email cust-row flex">
                <div className="element">
                  <label htmlFor="email">
                    Email<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
                <div className="element">
                  <label htmlFor="number">
                    Mobile Number<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="number"
                    name="mobNumber"
                    value={inputs.mobNumber}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                  />
                </div>
              </div>

              <div className="email cust-row flex">
                <div className="element">
                  <label htmlFor="org">
                    Organisation<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="org"
                    value={inputs.org}
                    onChange={handleChange}
                    placeholder="Organisation"
                  />
                </div>
                <div className="element">
                  <label htmlFor="location">
                    Location/City<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="location"
                    name="location"
                    value={inputs.location}
                    onChange={handleChange}
                    placeholder="Location/City"
                  />
                </div>
              </div>

              {/* Profile Preference */}

              <div className="profilepref cust-row flex">
                <div className="element">
                  <label htmlFor="profilepref">Profile Preferences</label>
                  <select
                    name="profilepref"
                    value={""}
                    onChange={(e) => {
                      handleChange(e);
                      setList((item) => [...item, e.target.value]);
                    }}
                    id="profile-pref"
                  >
                    <option value="" disabled hidden>
                      Select Profile Preferences
                    </option>
                    <option value="Data Science">Data Science</option>
                    <option value="Software">Software</option>
                    <option value="Banking and Finance">
                      Banking and Finance
                    </option>
                    <option value="Consulting">Consulting</option>
                    <option value="Analytics">Analytics</option>
                  </select>
                </div>
                <div className="profile-pref-list">
                  {list.map((item) => {
                    return (
                      <div className="profile-pref-item">
                        <p>{item}</p>{" "}
                        <button
                          type="button"
                          className="cust-btn propref-btn"
                          onClick={(e) => {
                            const items = list.filter(
                              (item) =>
                                item !==
                                e.target.parentElement.childNodes[0].innerHTML
                            );
                            setList(items);
                          }}
                        >
                          x
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Time Preference */}

              <div className="time-preference">
                <div className="element">
                  <p>General Day and Time Preferences for Sessions</p>
                  <div className="element-item">
                    <input type="checkbox" name="preference" id="preference" />
                    <label htmlFor="preference"> No Specific Preferences</label>
                  </div>
                  <div className="pref-item">
                    <ul>
                      {/* {arrayDays !== []
                        ? arrayDays.map((item) => {
                            return <li>{item}</li>;
                          })
                        : null} */}
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
                    className="cust-btn add-time-btn"
                    onClick={() => {
                      const addPref = document.querySelector(".popup");
                      addPref.classList.remove("hide");
                    }}
                  >
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
            </div>

            {/* Col-30 */}

            <div className="profile-form-profile">
              {/* Profile Photo */}

              <div className="profile-photo">
                <h4>Profile Photo</h4>
                <img
                  src={require("../../images/photo.png")}
                  className="upload"
                  alt="Upload"
                />
                <input
                  type="file"
                  name="profile"
                  id="profile"
                  value={inputs.profile || ""}
                  accept="image/png, image/jpg, image/jpeg"
                  onChange={(e) => {
                    handleChange(e);
                    var image = document.querySelector(".upload");
                    image.src = URL.createObjectURL(e.target.files[0]);
                  }}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="cust-btn create-btn">
            Create Account
          </button>
        </form>
      </div>
    </>
  );
};

export default InterviewerProfileForm;
