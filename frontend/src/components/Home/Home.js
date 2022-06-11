import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";

import Navbar from "./Navbar";

const changeLink = () => {
  const links = document.querySelectorAll(".nav-item a");
  links.forEach((link) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active");
    }
    if (link.innerHTML === "Home") {
      link.classList.add("active");
    }
  });
};

const Home = () => {
  useEffect(() => {
    changeLink();
  }, []);
  let navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="Home">
        <div
          id="carouselExampleInterval"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <img
                src={require("../../images/car-1.jpg")}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={require("../../images/car-2.jpg")}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src={require("../../images/car-3.jpg")}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="get-started flex">
          <div className="started-item left">
            <p>
              Are you a Student (looking for a Mock Interview (plus Feedback) or
              a Mentor for Interview Guidance)?
            </p>
            <button
              className="cust-btn create-account-btn"
              onClick={() => {
                navigate("/profile-form");
              }}
            >
              Create Account
            </button>
          </div>
          <div className="started-item right">
            <p>
              Are you a Professional (offering a Mock Interview (plus Feedback)
              or Mentorship for Interview Guidance)?
            </p>
            <button
              className="cust-btn create-account-btn"
              onClick={() => {
                navigate("/profile-form");
              }}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
