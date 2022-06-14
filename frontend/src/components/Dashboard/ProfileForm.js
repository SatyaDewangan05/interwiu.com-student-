import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";

import "./ProfileForm.css";

import Navbarlogedin from "./Navbarlogedin";
import data from "./data.js";

const ProfileForm = (userDetails) => {
  const user = userDetails.user;
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  let navigate = useNavigate();

  const [inputs, setInputs] = useState({});
  const [list, setList] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <>
      <Navbarlogedin />
      <div className="profile-form">
        <h1>Create an Account as a Student</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(inputs);
            console.log(list);
            navigate("/dashboard");
          }}
        >
          <div className="profile-form-cont">
            <div className="profile-form-text">
              <div className="name flex">
                <div className="element">
                  <label htmlFor="firstname">First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    value={inputs.firstname || ""}
                    onChange={handleChange}
                    placeholder="First Name"
                    defaultValue={user.username}
                  />
                </div>
                <div className="element">
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    value={inputs.lastname || ""}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="email flex">
                <div className="element">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
                <div className="element">
                  <label htmlFor="number">Mobile Number</label>
                  <input
                    type="number"
                    name="number"
                    value={inputs.number || ""}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                  />
                </div>
              </div>
              <div className="institution flex">
                <div className="element">
                  <label htmlFor="institute">Institure</label>
                  <select
                    name="institute"
                    id="institute"
                    value={inputs.institute || ""}
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
                    value={inputs.program || ""}
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
                <div className="element">
                  <label htmlFor="branch">Branch</label>
                  <select
                    name="branch"
                    value={inputs.branch || ""}
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
              </div>
              <div className="project flex">
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
                <div className="element">
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
                </div>
                <div className="element">
                  <label htmlFor="specialization">
                    Specialization (If applicable)
                  </label>
                  <input
                    type="text"
                    name="specialization"
                    placeholder="Specialization"
                  />
                </div>
              </div>
              <div className="specialization flex">
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
                    <option value="Banking">Banking and Finance</option>
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
              <div className="time-preference">
                <div className="element">
                  <p>General Day and Time preferences for sessions</p>
                  <div className="element-item">
                    <input type="checkbox" name="preference" id="preference" />
                    <label htmlFor="preference">No specific Preferences</label>
                    <button className="cust-btn add-time-btn">
                      Add Time Preference
                    </button>
                  </div>
                </div>
              </div>
              <button type="submit" className="cust-btn create-btn">
                Create Account
              </button>
            </div>
            <div className="profile-form-docs">
              <div className="profile-form-profile">
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
                <div className="profile-resume">
                  <h4>Resume</h4>
                  <embed
                    src=""
                    height="300px"
                    frameBorder="0"
                    className="pro-resume"
                    style={{ display: "none" }}
                  />
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    accept="text/docs, pdf"
                    value={inputs.resume}
                    onChange={(e) => {
                      handleChange(e);
                      const resume = document.querySelector(".pro-resume");
                      resume.style.display = "unset";
                      resume.src = URL.createObjectURL(e.target.files[0]);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileForm;
