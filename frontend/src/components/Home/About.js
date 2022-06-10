import React from "react";
import { useEffect } from "react";

import "./About.css";

import Navbar from "./Navbar";

const changeLink = () => {
  const links = document.querySelectorAll(".nav-item a");
  links.forEach((link) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active");
    }
    if (link.innerHTML === "About Us") {
      link.classList.add("active");
    }
  });
};

const About = () => {
  useEffect(() => {
    changeLink();
  }, []);
  return (
    <>
      <Navbar />
      <div className="about flex">
        <div className="about-cont flex">
          <div className="flex-50">
            <h1>About</h1>
          </div>
          <div className="flex-50">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              autem nisi consequatur fugiat odit ullam optio id repellat
              voluptate architecto accusantium nostrum excepturi quae aspernatur
              vero, sed tenetur repellendus, numquam quas itaque? Aut rem quia
              neque reprehenderit, distinctio vero nam! Minus itaque magni,
              obcaecati porro, consequatur libero nesciunt provident nulla saepe
              ipsum sunt placeat, doloremque quia eius temporibus? Ab architecto
              excepturi, enim voluptate libero voluptatum possimus alias itaque
              adipisci, corporis laboriosam. Eum perspiciatis dolorum, qui unde
              consectetur repellendus quidem cumque.
            </p>
            <div className="about-icon">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
