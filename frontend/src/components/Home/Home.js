import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Testimonial from "./Testimonials";
import "./Home.css";
import Features from "./Features";
import Navbar from "./Navbar";
import Professional from "./TwoColWithButton";
import Hero from "./TwoColumnWithInput";
import Footer from "./MiniCenteredFooter";
import FAQS from "./SingleCol";
import Partners from "./Partner/index.jsx";
import Working from "./HowitWorks";

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
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    changeLink();
  }, []);

  return (
    <>
      <Navbar />
      {/* <div className="Home">
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
              <span style={{ fontSize: "30px" }}>Are you a Student</span> <br />{" "}
              (looking for a Mock Interview (plus Feedback) or a Mentor for
              Interview Guidance)?
            </p>
            <button
              className="cust-btn create-account-btn"
              onClick={() => {
                const signupstd = document.querySelector(".signup-student");
                signupstd.classList.remove("hide");
              }}
            >
              Create Account
            </button>
          </div>
          <div className="started-item right">
            <p>
              <span style={{ fontSize: "30px", color: "white" }}>
                Are you a Professional
              </span>{" "}
              <br /> (offering a Mock Interview (plus Feedback) or Mentorship
              for Interview Guidance)?
            </p>
            <button
              className="cust-btn create-account-btn"
              onClick={() => {
                const signuppro = document.querySelector(
                  ".signup-professional"
                );
                signuppro.classList.remove("hide");
              }}
            >
              Create Account
            </button>
          </div>
        </div>
      </div> */}
      <div id="home">
        <Hero />
      </div>
      <div className="get-started flex" id="getStarted">
        <div className="started-item left">
          <p>
            <span style={{ fontSize: "30px" }}>Are you a Student</span> <br />{" "}
            (looking for a Mock Interview (plus Feedback) or a Mentor for
            Interview Guidance)?
          </p>
          <button
            className="cust-btn create-account-btn"
            onClick={() => {
              const signupstd = document.querySelector(".signup-student");
              signupstd.classList.remove("hide");
            }}
          >
            Create Account
          </button>
        </div>
        <div className="started-item right">
          <p>
            <span style={{ fontSize: "30px", color: "white" }}>
              Are you a Professional
            </span>{" "}
            <br /> (offering a Mock Interview (plus Feedback) or Mentorship for
            Interview Guidance)?
          </p>
          <button
            className="cust-btn create-account-btn"
            onClick={() => {
              const signuppro = document.querySelector(".signup-professional");
              signuppro.classList.remove("hide");
            }}
          >
            Create Account
          </button>
        </div>
      </div>
      <div id="howItWorks">
        <Working />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="profiles">
        <Professional />
      </div>
      <div id="partners">
        <Partners />
      </div>
      <div id="testimonials">
        <Testimonial />
      </div>
      <div id="faqs">
        <FAQS />
      </div>
      <Footer />
    </>
  );
};

export default Home;
