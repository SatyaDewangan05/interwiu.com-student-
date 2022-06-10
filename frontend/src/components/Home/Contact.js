import React from "react";
import { useEffect, useState } from "react";

import "./Contact.css";

import Navbar from "./Navbar";

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

// const submit = (e) => {
//   e.preventDefault();
//   console.log("Name: ", e.target[0].value);
//   console.log("Email: ", e.target[1].value);
//   console.log("Message: ", e.target[2].value);
// };

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    changeLink();
  }, []);

  return (
    <>
      <Navbar />
      <div className="contact flex">
        <div className="contact-cont flex">
          <div className="flex-50">
            <img src={require("../../images/map(1).png")} alt="Map" />
          </div>
          <div className="flex-50 contact-form-cont">
            <h2>Contact Us</h2>
            <div className="contact-details">
              <p>Address: Fifth Avenue, New York</p>
              <p>Phone: 999-123-6475</p>
              <p>Email: contact@interwiu.com</p>
            </div>
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Name: ", e.target[0].value);
                console.log("Email: ", e.target[1].value);
                console.log("Message: ", e.target[2].value);
                setName("");
                setEmail("");
                setMessage("");
              }}
            >
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
              <button type="submit" className="cust-btn submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
