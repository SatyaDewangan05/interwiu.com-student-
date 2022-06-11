import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";

import "./Profile_form.css";

import Navbar from "./Navbar";

const Profile_form = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  let navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="profile-form">
        <h1>Create an Account as a Student</h1>
        <div className="profile-form-cont">
          <div className="profile-form-text">
            <form>
              <div className="name flex">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="email flex">
                <input type="email" placeholder="Email" />
                <input type="number" placeholder="Mobile Number" />
              </div>
              <div className="institution flex">
                <select name="institute" id="institute" placeholder="Institute">
                  <option value="" disabled selected hidden>
                    Select Institute
                  </option>
                  <option value="IITKGP">IIT Kharagpur</option>
                  <option value="IITB">IIT Bombay</option>
                  <option value="IITD">IIT Delhi</option>
                  <option value="IITM">IIT Madras</option>
                  <option value="IITK">IIT Kanpur</option>
                  <option value="BITSP">BITS Pilani</option>
                </select>
                <select name="program" id="program">
                  <option value="" disabled selected hidden>
                    Select Program
                  </option>
                  <option value="btech">B.Tech</option>
                  <option value="dual">Dual Degree (B.Tech + M.Tech)</option>
                  <option value="mtech">M.Tech</option>
                  <option value="ms">MS(by Research)</option>
                  <option value="msc">M.sc or Intergrated MS/MA</option>
                  <option value="phd">PhD</option>
                </select>
                <select name="branch" id="branch">
                  <option value="" disabled selected hidden>
                    Select Branch/Department
                  </option>
                  <option value="areo">Areospace Engineering</option>
                  <option value="civil">Civil Engineering</option>
                  <option value="ee">Electrical Engineering</option>
                  <option value="eee">
                    Electrical & Electronics Engineering
                  </option>
                  <option value="etc">
                    Electronics & Telecommunication Engineering
                  </option>
                  <option value="cse">Computer Science Engineering</option>
                  <option value="mech">Mechanical Engineering</option>
                </select>
              </div>
              <div className="project flex">
                <input
                  type="text"
                  placeholder="B.Tech/Dual Degree/M.Tech/MS/PhD Project Title"
                />
                <div className="preference">
                  <label htmlFor="preference">Recording Preference: </label>{" "}
                  <br />
                  <input
                    type="radio"
                    name="preference"
                    id="yes"
                    value={"yes"}
                  />
                  <label htmlFor="yes">Yes</label>
                  <input type="radio" name="preference" id="no" value={"no"} />
                  <label htmlFor="no">No</label>
                </div>
                <input
                  type="text"
                  placeholder="Specialization (if applicable)"
                />
              </div>
              <textarea
                name="desc"
                id="desc"
                cols="30"
                rows="10"
                placeholder="A short desscription about yourself (Bio)"
              ></textarea>
              <div className="specialization flex">
                <select name="profile-pref" id="profile-pref">
                  <option value="" disabled selected hidden>
                    Profile Preferences
                  </option>
                  <option value="ds">Data Science</option>
                  <option value="software">Software</option>
                  <option value="banking">Banking and Finance</option>
                  <option value="consulting">Consulting</option>
                  <option value="analytics">Analytics</option>
                </select>
              </div>
              <p>General Day and Time preferences for sessions</p>
              <input type="checkbox" name="preference" id="preference" />
              <label htmlFor="preference">No specific Preferences</label>
              {/* <ul className="time-preference">
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
          </ul> */}
              <button
                type="submit"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                onClick={() => {
                  navigate("/dashboard");
                }}
                className="cust-btn create-btn"
              >
                Create Account
              </button>
            </form>
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
                  accept="image/png, image/jpg, image/jpeg"
                  onChange={(e) => {
                    var image = document.querySelector(".upload");
                    image.src = URL.createObjectURL(e.target.files[0]);
                  }}
                />
              </div>
              <div className="profile-resume">
                <h4>Resume</h4>
                <embed
                  src=""
                  // width="300px"
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
                  onChange={(e) => {
                    const resume = document.querySelector(".pro-resume");
                    resume.style.display = "unset";
                    resume.src = URL.createObjectURL(e.target.files[0]);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile_form;
