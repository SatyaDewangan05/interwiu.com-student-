import React from "react";
import "./Login.css";

const remove = () => {
  const loginFunc = document.querySelector(".login-container");
  loginFunc.classList.add("hide");
};

const Login = () => {
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
            Let’s appear for a Mock Interview and obtain Feedback on your
            performance in realtime!
          </p>
        </div>
        <div className="login-system">
          <div className="col vertical-line">
            <h1>Sign In as a Student</h1>
            <form action="http://localhost:8585/auth/google">
              <button className="signin-btn login" type="submit">
                <img src={require("../../images/google.png")} alt="Google" />
                Sign In with Google
              </button>
            </form>
            <form action="http://localhost:8585/auth/facebook">
              <button className="signin-btn login" type="submit">
                <img
                  src={require("../../images/facebook.png")}
                  alt="Facebook"
                />
                Sign In with Facebook
              </button>
            </form>

            <form action="http://localhost:8585/auth/linkedin">
              <button className="signin-btn login" type="submit">
                <img
                  src={require("../../images/linkedin.png")}
                  alt="Linkedin"
                />
                Sign In with Linkedin
              </button>
            </form>
          </div>
          <div className="col">
            <h1>Sign In as a Professional</h1>
            <form action="http://localhost:8585/auth/google">
              <button className="signin-btn login" type="submit">
                <img src={require("../../images/google.png")} alt="Google" />
                Sign In with Google
              </button>
            </form>
            <form action="http://localhost:8585/auth/facebook">
              <button className="signin-btn login" type="submit">
                <img
                  src={require("../../images/facebook.png")}
                  alt="Facebook"
                />
                Sign In with Facebook
              </button>
            </form>

            <form action="http://localhost:8585/auth/linkedin">
              <button className="signin-btn login" type="submit">
                <img
                  src={require("../../images/linkedin.png")}
                  alt="Linkedin"
                />
                Sign In with Linkedin
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
