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
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </p>
        </div>
        <div className="login-system">
          <div className="col">
            <h1>Sign In</h1>
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
          <div className="login-image col">
            <img src={require("../../images/group3.png")} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
