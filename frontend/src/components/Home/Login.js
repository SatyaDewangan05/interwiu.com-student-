import React from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const remove = () => {
  const loginFunc = document.querySelector(".login-container");
  loginFunc.classList.add("hide");
};

const Login = () => {
  let navigate = useNavigate();

  const login = () => {
    navigate("/dashboard");
    const loginFunc = document.querySelector(".login-container");
    loginFunc.classList.add("hide");
  };
  return (
    <div className="login-container hide">
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
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
        </div>
        <div className="login-system">
          <div className="create-account col">
            <h1>Sign In</h1>
            <form className="form">
              <div className="form-input">
                <input type="Email" placeholder="Email" />
                <input type="Password" placeholder="Password" />
              </div>
              <div className="auth">
                <button
                  className="create-btn login"
                  onClick={(e) => {
                    e.preventDefault();
                    login();
                  }}
                >
                  Sign In
                </button>
                <p className="auth-p">or, Create Account</p>
              </div>
              <button
                className="signup-btn login"
                onClick={(e) => {
                  e.preventDefault();
                  login();
                }}
              >
                <img
                  src={require("../../images/facebook.png")}
                  alt="Facebook"
                />{" "}
                Sign In with Facebook
              </button>
              <button
                className="signup-btn login"
                onClick={(e) => {
                  e.preventDefault();
                  login();
                }}
              >
                <img src={require("../../images/google.png")} alt="Google" />
                Sign In with Google
              </button>
              <p className="forget">Forget Password?</p>
            </form>
          </div>
          <div className="login-image col">
            <img src={require("../../images/group3.png")} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
