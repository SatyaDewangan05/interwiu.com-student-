import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import Searchable from "react-searchable-dropdown";

import Navbarlogedin from "./Navbarlogedin";

import "./Dashboard.css";
const Dashboard = (userDetails) => {
  const [list, setList] = useState([
    "Data Science",
    "Banking and Finance",
    "Consulting",
  ]);

  const user = userDetails.user;
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  let navigate = useNavigate();
  return (
    <>
      <Navbarlogedin />
      <div className="dashboard">
        <div className="my-2 py-2 border rounded relative">
          <div
            className="absolute top-4 left-2 text-blue-500 cursor-pointer font-medium hover:text-red-600"
            onClick={() => {
              navigate("/searching");
            }}
          >
            <i class="fa-solid fa-angle-left"></i> Back
          </div>
          <h2
            className="text-4xl font-medium text-center"
            style={{ color: "#fda50f" }}
          >
            My Profile
          </h2>
          <div
            className="absolute top-4 right-2 text-blue-500 cursor-pointer font-medium hover:text-red-600"
            onClick={() => {
              navigate("/profile-form");
            }}
          >
            <i class="fa-solid fa-pen-to-square"></i> Edit
          </div>
        </div>
        <div className="relative my-4">
          <div id="profile-cover"></div>
          <div id="profile-picture" className="">
            <img src={require("../../images/photo.png")} alt="profile" />
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-semibold" style={{ color: "#e84c3d" }}>
            John Doe
          </h3>
          <button className="cust-btn resume-btn" type="button">
            <a
              href={require("../../images/cs_2022.pdf")}
              target="_black"
              className="resume-a"
            >
              <i class="fa-solid fa-link"></i> Resume
            </a>
          </button>
          <div className="my-4" style={{ color: "#1265a8" }}>
            <p>B.Tech</p>
            <p>Computer Science Engineering</p>
            <p>MIT, Cambridge, USA</p>
          </div>
        </div>
        <div
          id="social-links"
          className="w-60 my-6 p-2 mx-auto text-4xl rounded flex justify-center"
        >
          <i class="fa-brands fa-linkedin mx-2 cursor-pointer hover:text-5xl text-blue-500"></i>
          <i class="fa-brands fa-github mx-2 cursor-pointer hover:text-5xl "></i>
          <i class="fa-brands fa-twitter mx-2 cursor-pointer hover:text-5xl text-blue-500"></i>
        </div>
        {/* <div id="profile-pref" className="mx-auto">
          <p className="text-xl font-medium">Profile Preference</p>
          <ul className="px-6 text-left">
            {list?.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
