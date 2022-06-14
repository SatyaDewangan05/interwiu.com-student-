import React from "react";
import { useState, useEffect } from "react";

import Navbar from "./Navbar";

import "./Contact_copy.css";

import axios from 'axios'

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
  const [data, setData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    number:"",
    message:""
  });

  useEffect(() => {
    changeLink();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      firstname: data.firstname,
      lastname: data.lastname,
      email:data.email,
      number:data.number,
      message:data.message
    }
  
  axios.post("http://localhost:8585/send/contactus", userData).then((response) => {
      console.log(response.status);
      console.log(response.data);
    });
    setData({
      firstname:"",
      lastname:"",
      email:"",
      number:"",
      message:""
    })
    window.alert("Are you sure?")
  }

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
              onSubmit={handleSubmit} method="POST"
            >
              <h2>Send a Message</h2>
              <div className="name flex">
                <div className="first-name">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    value={data.firstname}
                    onChange={handleChange}
                  />
                </div>
                <div className="last-name">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={data.lastname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="email flex">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  placeholder="Number"
                  name="number"
                  value={data.number}
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="message"
                id="message"
                placeholder="Write your message here..."
                value={data.message}
                onChange={handleChange}
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
