import React from "react";
import { useNavigate } from "react-router-dom";

import "./Signupstudent.css";

const remove = () => {
  const loginFunc = document.querySelector(".signup-student");
  loginFunc.classList.add("hide");
};

const Signupstudent = () => {
  let navigate = useNavigate();

  const signup = () => {
    navigate("/profile-form");
    const loginFunc = document.querySelector(".signup-student");
    loginFunc.classList.add("hide");
  };
  return (
    <div className="signup-student hide">
      <div className="login">
        <div
          className="cross"
          onClick={() => {
            remove();
          }}
        >
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
        <div className="login-head">
          <p>
            Let’s appear for a Mock Interview and obtain Feedback on your
            performance in realtime!. Sign up now
          </p>
        </div>
        <div className="login-system">
          <div className="col">
            <h1>Sign Up as a Student</h1>
            <button
              className="signin-btn login"
              onClick={(e) => {
                e.preventDefault();
                signup();
              }}
            >
              <img src={require("../../images/google.png")} alt="Google" />
              Sign Up with Google
            </button>
            <button
              className="signin-btn login"
              onClick={(e) => {
                e.preventDefault();
                signup();
              }}
            >
              <img src={require("../../images/facebook.png")} alt="Facebook" />{" "}
              Sign Up with Facebook
            </button>
            <button
              className="signin-btn login"
              onClick={(e) => {
                e.preventDefault();
                signup();
              }}
            >
              <img src={require("../../images/linkedin.png")} alt="Facebook" />{" "}
              Sign Up with Linkedin
            </button>
          </div>
          <div className="login-image col">
            <img src={require("../../images/group3.png")} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signupstudent;
