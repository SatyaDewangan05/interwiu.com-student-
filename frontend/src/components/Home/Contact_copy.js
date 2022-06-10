import React from "react";
import { useState, useEffect } from "react";

import Navbar from "./Navbar";

import "./Contact_copy.css";

const changeLink = () => {
  const links = document.querySelectorAll(".nav-item a");
  links.forEach((link) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active");
    }
    if (link.innerHTML === "Contact Us") {
      link.classList.add("active");
    }
  });
};

const Contact_copy = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    changeLink();
  }, []);

  return (
    <>
      <Navbar />
      <div className="contact-copy flex">
        <div className="contact-copy-cont">
          <div className="info">
            <h3>Contact info</h3>
            <p>
              <i class="fa-solid fa-location-dot"></i> Central Park, New York
              City, New York, USA, 10019
            </p>
            <p>
              <i class="fa-solid fa-envelope"></i> contact@interwiu.com
            </p>
            <p>
              <i class="fa-solid fa-phone"></i> (9714)-422-792
            </p>
            <div className="info-socials">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-pinterest-p"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <div className="message">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(e.target.value);
                // console.log("Name: ", e.target[0].value);
                // console.log("Email: ", e.target[1].value);
                // console.log("Message: ", e.target[2].value);
                // setFirstname("");
                // setEmail("");
                // setMessage("");
              }}
            >
              <h2>Send a Message</h2>
              <div className="name flex">
                <div className="first-name">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                  />
                </div>
                <div className="last-name">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => {
                      setLastname(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="email flex">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <input
                  type="number"
                  placeholder="Number"
                  value={number}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                />
              </div>
              <textarea
                name="message"
                id="message"
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
              <button className="cust-btn send-btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_copy;
