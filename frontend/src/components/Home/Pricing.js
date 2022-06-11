import React from "react";
import { useEffect } from "react";

import "./Pricing.css";

import Navbar from "./Navbar";

const changeLink = () => {
  const links = document.querySelectorAll(".nav-item a");
  links.forEach((link) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active");
    }
    if (link.innerHTML === "Pricing") {
      link.classList.add("active");
    }
  });
};

const Pricing = () => {
  useEffect(() => {
    changeLink();
  }, []);
  return (
    <>
      <Navbar />
      <div className="pricing">
        <div className="pricing-cont">
          <h2>Choose the Plan</h2>
          <div className="pricing-plan flex">
            <div className="plan-item">
              <p className="plan-type">Free</p>
              <p className="plan-price">$0</p>
              <ul>
                <li>500 request</li>
                <li>No SSH</li>
                <li>No Extended free trials</li>
              </ul>
              <button className="cust-btn plan-btn">Select</button>
            </div>
            <div className="plan-item">
              <p className="plan-type">Basic</p>
              <p className="plan-price">$10</p>
              <ul>
                <li>10000 request</li>
                <li>Basic SSH</li>
                <li>Extended free trials</li>
              </ul>
              <button className="cust-btn plan-btn">Select</button>
            </div>
            <div className="plan-item">
              <p className="plan-type">Premium</p>
              <p className="plan-price">$30</p>
              <ul>
                <li>Unlimited request</li>
                <li>Standard SSH</li>
                <li>Extended free trials</li>
              </ul>
              <button className="cust-btn plan-btn">Select</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
