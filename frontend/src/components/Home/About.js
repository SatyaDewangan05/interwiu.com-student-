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
        <div className="about-cont">
          <h1>About Us</h1>
          <p>
            interwiu.com is an online interactive platform developed by Fyzen
            Career Solutions Pvt Ltd, which connects the students or candidates
            (interviewees/mentees) with the professionals (interviewers/mentors)
            using a filter-based smart match-making algorithm, to facilitate the
            Mock Interviews along with Feedback Sessions and Mentorship Sessions
            for Interview Guidance. The interviewers and mentors serving at the
            platform are the experienced professionals from various big MNCs
            like Microsoft, Amazon, Goldman Sachs, American Express, McKinsey,
            Philips, Texas Instruments, Zee Entertainment, General Electric,
            Groww, etc.; whereas the students availing the interview services
            and mentorship sessions belong to various technical institutions.
            The mock interviews mimic the real interviews extensively, and
            thereby makes the students confident enough to face the real
            interviews. The personalized feedback session following a mock
            interview helps a student rectify the mistakes, realize what went
            right or wrong, and thus improving the interview performance and
            enhancing the odds of cracking the real interviews. The mentorship
            session helps the students intensively in learning the exhaustive
            and exclusive approach to sail through the interviews confidently
            and ensuring the success.
          </p>
          <h5>Team</h5>
          <p>
            The team is composed of below four young and skilled enthusiasts,
            who are deeply passionate about entrepreneurship.
          </p>

          <h5>1. Utsav Bhardwaj (CEO)</h5>
          <p>
            Utsav handles the major business activities of Fyzen Career
            Solutions like product conceptualization, planning, strategizing,
            overall resource allocation, execution, managing public relations,
            marketing, and advertising. He is an alumnus of IIT Madras, and
            presently pursuing his Doctoral Studies under the Joint PhD Program
            of The University of Queensland, Australia and IIT Delhi. Earlier,
            he worked as an Engineer at Eaton India Innovation Center, Pune; and
            a Senior Incubation Associate (Investor Relations) at IIT Madras
            Incubation Cell, Chennai.
          </p>

          <h5>2. Rakesh Patil (CTO)</h5>
          <p>
            Rakesh heads all the technical activities of Fyzen Career Solutions
            like platform development (front-end as well as back-end),
            integration, technical resource allocation, testing and
            rectificacion, managing safety and security of platform, database
            management, bringing updates, etc. He is a research scholar at IIT
            Madras, and has worked earlier as a Software Engineer at Intel,
            Bangalore; and a Graphics Engineer at Nvidia, Bangalore.
          </p>
          <h5>3. Suryansh Yadav (Full Stack Developer)</h5>
          <p>
            Suryansh handles the full stack development process for the online
            platform (interwiu.com) with a major focus on the back-end and
            database management. He is a B.Tech (3rd year) student at IIT
            Kanpur, who has been actively pursuing the web development
            initiatives almost since the beginning of his undergraduate studies.
          </p>

          <h5>4. Satya Dewangan (Full Stack Developer)</h5>
          <p>
            Satyaprakash handles the full stack development process for the
            online platform (interwiu.com) with a major focus on the front-end
            development and UI/UX design. He is a B.Tech (4th year) student at
            Birla Institute of Technology (BIT) Durg, who has been
          </p>

          <h5>Mr. Vaibhav Goyal (Mentor)</h5>
          <p>
            The team is mentored by Mr. Vaibhav Goyal, who is an alumnus of IIT
            Madras and SP Jain Institute of Management & Research, and a
            Co-founder of the “digital outcomes” which is a new generation
            startup providing digital transformation solutions to businesses
            worldwide. He holds a sound professional experience of around 19
            years in product designing, development and growth services across
            various sectors like media & entertainment, e-commerce, social
            media, health and wellness, human resources and recruitment, fashion
            & lifestyle, marketing tech and omnichannel retail. During this
            journey, he has worked in various technological roles at Ittiam
            Systems, Nokia, DigiVive, Hungama, Jio, Shemaroo Entertainment Ltd.,
            and Charmboard. He is a serial entrepreneur; Product & Technology
            advisor in deep tech, enterprise SaaS & web3/NFT projects; and a
            mentor at Nasscom's DeepTech club. He mentors the Fyzen Career
            Solutions in every context ranging from product development and
            launch, planning and execution, go-to-market strategy, hiring,
            fundraising, etc.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
