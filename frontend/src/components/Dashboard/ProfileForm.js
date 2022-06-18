import React from "react";
import { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ProfileForm.css";

import Navbarlogedin from "./Navbarlogedin";
import data from "./data.js";

const ProfileForm = (userDetails) => {
  const user = userDetails.user;
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

  const [inputs, setInputs] = useState({
    dfname: user.username,
    dlname: "",
    email: "",
    mobNumber: "",
    message: "",
    institute: "",
    program: "",
    branch: "",
    specialization: "",
    profilePreference: "",
  });
  const [list, setList] = useState([]);

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
      institute: inputs.institute,
      program: inputs.program,
      branch: inputs.branch,
      profilePreference: inputs.profilePreference,
      specialization: inputs.specialization,
    };

    axios
      .patch(`http://localhost:8585/send/profile/${user.Id}`, userData)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
      });
    window.alert("Are you sure?");
  };

  return (
    <>
      <Navbarlogedin />
      <div className="profile-form">
        <h1>Create An Account As A Student</h1>
        <form onSubmit={handleSubmit}>
          {/* Profile Form Container */}

          <div className="profile-form-cont">
            {/* Col-70 */}

            <div className="profile-form-text">
              {/* First Name and Last Name */}

              <div className="name cust-row flex">
                <div className="element">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="text"
                    name="dfname"
                    value={inputs.dfname || user.username}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                </div>
                <div className="element">
                  <label htmlFor="lastname">Last Name</label>
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
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={inputs.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
                <div className="element">
                  <label htmlFor="number">Mobile Number</label>
                  <input
                    type="number"
                    name="mobNumber"
                    value={inputs.mobNumber}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                  />
                </div>
              </div>

              {/* Institution */}

              <div className="institution cust-row flex">
                <div className="element">
                  <label htmlFor="institute">Institute</label>
                  <select
                    name="institute"
                    id="institute"
                    value={inputs.institute}
                    onChange={handleChange}
                    placeholder="Institute"
                  >
                    <option value="" disabled hidden>
                      Select Institute
                    </option>
                    <option value="IITKGP">IIT Bhilai</option>
                    <option value="IITB">IIT (BHU) Varanasi</option>
                    <option value="IITD">IIT Bhubaneswar</option>
                    <option value="IITM">IIT Bombay</option>
                    <option value="IITK">IIT Delhi</option>
                  </select>
                </div>
                <div className="element">
                  <label htmlFor="program">Program</label>
                  <select
                    name="program"
                    value={inputs.program}
                    onChange={handleChange}
                    id="program"
                  >
                    <option value="" disabled hidden>
                      Select Program
                    </option>
                    {}
                    <option value="btech">B.Tech</option>
                    <option value="dual">Dual Degree (B.Tech + M.Tech)</option>
                    <option value="mtech">M.Tech</option>
                    <option value="ms">MS(by Research)</option>
                    <option value="msc">M.sc or Intergrated MS/MA</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>
              </div>

              {/* Branch and Specialization */}

              <div className="branch cust-row flex">
                <div className="element">
                  <label htmlFor="branch">Branch</label>
                  <select
                    name="branch"
                    value={inputs.branch}
                    onChange={handleChange}
                    id="branch"
                  >
                    <option value="" disabled hidden>
                      Select Branch/Department
                    </option>
                    {data[1].branches.map((item) => {
                      return (
                        <option
                          value={item}
                          key={data[1].branches.indexOf(item)}
                        >
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="element">
                  <label htmlFor="specialization">
                    Specialization (If applicable)
                  </label>
                  <input
                    type="text"
                    name="specialization"
                    placeholder="Specialization"
                    value={inputs.specialization}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Project Title */}

              <div className="project cust-row flex">
                <div className="element">
                  <label htmlFor="projecttitle">
                    B.Tech/Dual Degree/M.Tech/MS/PhD Project Title
                  </label>
                  <input
                    type="text"
                    name="projecttitle"
                    placeholder="Project Title"
                  />
                </div>
                {/* <div className="element">
                  <label htmlFor="preference">Recording Preference: </label>{" "}
                  <div className="preference">
                    <input
                      type="radio"
                      name="preference"
                      id="yes"
                      value={"yes"}
                    />
                    <label htmlFor="yes">Yes</label>
                    <input
                      type="radio"
                      name="preference"
                      id="no"
                      value={"no"}
                    />
                    <label htmlFor="no">No</label>
                  </div>
                </div> */}
              </div>

              {/* Profile Preference */}

              <div className="profilepref cust-row flex">
                <div className="element">
                  <label htmlFor="profilepref">Profile Preference</label>
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
                      Profile Preferences
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
                  <p>General Day and Time preferences for sessions</p>
                  <div className="element-item">
                    <input type="checkbox" name="preference" id="preference" />
                    <label htmlFor="preference"> No specific Preferences</label>
                    <button type="button" className="cust-btn add-time-btn">
                      Add Time Preference
                    </button>
                  </div>
                </div>
                <div className="popup flex">
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
                          <option>Select an option</option>
                        </select>
                        <div class="overSelect"></div>
                      </div>
                      <div id="checkboxes">
                        <label for="monday">
                          <input type="checkbox" id="monday" />
                          Monday
                        </label>
                        <label for="tusday">
                          <input type="checkbox" id="tusday" />
                          Tuesday
                        </label>
                        <label for="wednesday">
                          <input type="checkbox" id="wednesday" />
                          Wednesday
                        </label>
                        <label for="thrusday">
                          <input type="checkbox" id="thrusday" />
                          Thrusday
                        </label>
                        <label for="friday">
                          <input type="checkbox" id="friday" />
                          Friday
                        </label>
                        <label for="saturday">
                          <input type="checkbox" id="saturday" />
                          Saturday
                        </label>
                        <label for="sunday">
                          <input type="checkbox" id="sunday" />
                          Sunday
                        </label>
                        <label for="cust">
                          <input type="checkbox" id="cust" />
                          Custom
                        </label>
                      </div>
                    </div>
                    {/* -------------------- */}
                    <div className="time">
                      <h5>Choose Time</h5>
                      <input type="time" name="time" id="time" />
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="cust-btn create-btn">
                Update Details
              </button>
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
              {/* Profile Resume */}

              <div className="profile-resume">
                <h4>Resume</h4>
                {/* <embed
                  src=""
                  height="300px"
                  frameBorder="0"
                  className="pro-resume"
                  style={{ display: "none" }}
                /> */}
                <button className="cust-btn resume-btn">
                  <a
                    href="#"
                    target="_black"
                    className="resume-a"
                    style={{ display: "none" }}
                  >
                    <i class="fa-solid fa-link"></i> Resume
                  </a>
                </button>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  accept="text/docs, pdf"
                  value={inputs.resume}
                  onChange={(e) => {
                    handleChange(e);
                    const resume = document.querySelector(".resume-a");
                    resume.style.display = "unset";
                    resume.href = URL.createObjectURL(e.target.files[0]);
                  }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileForm;
