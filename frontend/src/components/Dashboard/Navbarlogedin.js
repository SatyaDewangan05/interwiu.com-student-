import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "./Navbarlogedin.css";
import Bookmark from "./popups/Bookmark";

const Navbarlogedin = () => {
  let navigate = useNavigate();
  const location = useLocation();

  // useEffect(() => {
  //   console.log(window.location.pathname);
  // }, []);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const openable = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!openable.current.contains(e.target)) {
        setIsOpen(false);
      }
      // else if (openable.current.contains(e.target)) {
      //   console.log("works");
      // }
    });

    // const closeDropdown = (e) => {
    //   if (!openable.current.contains(e.target)) {
    //     setIsOpen(false);
    //   }
    // };
    // e.path.forEach((item) => {
    // });

    // console.log(e);

    // if (e.path[0].classList.contains === "profile-dropdown") {
    //   console.log(e);
    //   console.log("inside");
    // }
    // document.body.addEventListener("click", closeDropdown);
    // document
    //   .querySelector(".sidebar-profile")
    //   .removeEventListener("click", closeDropdown);
  }, []);

  const [active, setActive] = useState("/searching");

  const pathname = window.location.pathname.toLowerCase();
  const navItem = document.querySelectorAll(".nav-item a");
  if (pathname === "/searching") {
    navItem.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (item.href.includes("searching")) {
        item.firstChild.classList.add("active");
      }
    });
  }
  if (pathname === "/sent-requests") {
    navItem.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (item.href.includes("sent-requests")) {
        item.firstChild.classList.add("active");
      }
    });
  }
  if (pathname === "/accepted-requests") {
    navItem.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (item.href.includes("accepted-requests")) {
        item.firstChild.classList.add("active");
        console.log(item.firstChild);
      }
    });
  }
  if (pathname === "/upcoming-interviews") {
    navItem.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (item.href.includes("upcoming-interviews")) {
        item.firstChild.classList.add("active");
      }
    });
  }
  if (pathname === "/completed-interviews") {
    navItem.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (item.href.includes("completed-interviews")) {
        item.firstChild.classList.add("active");
      }
    });
  }

  // const changeActiveLink = (e) => {
  //   // e.preventDefault();
  //   const links = document.querySelectorAll(".nav-item a");
  //   links.forEach((item) => {
  //     if (item.classList.contains("active")) {
  //       item.classList.remove("active");
  //     }
  //   });
  //   e.target.classList.add("active");
  //   // console.log(e.target);
  // };

  // var prevScrollpos = window.pageYOffset;
  // window.onscroll = function () {
  //   var currentScrollPos = window.pageYOffset;
  //   // console.log(currentScrollPos);
  //   if (prevScrollpos === currentScrollPos) {
  //     document.querySelector(".navbarlogedin").style.top = "0";
  //   } else {
  //     document.querySelector(".navbarlogedin").style.top = "-100px";
  //   }
  //   // prevScrollpos = currentScrollPos;
  // };
  return (
    <>
      <Bookmark />
      <div className="navbarlogedin flex">
        <div className="logo">
          <Link to="/">
            <h1 className="text-2xl font-medium">interwiu.com</h1>
          </Link>
        </div>
        <ul className="nav-list flex">
          <li className="nav-item">
            <Link to="/searching">
              <p>Find an Interviewer</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sent-requests">
              <p>Sent Requests</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/accepted-requests">
              <p className="flex">
                Accepted Requests <div className="notify"></div>
              </p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/upcoming-interviews">
              <p>Upcoming Interviews</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/completed-interviews">
              <p className="flex">
                Completed Interviews <div className="notify"></div>
              </p>
            </Link>
          </li>
        </ul>
        <div className="sidebar flex">
          {/* Notification Bell */}
          {location.pathname === "/profile-form" ? null : (
            <div
              className="notifier rounded border px-3 py-2 m-1 hover:bg-slate-200"
              onClick={() => {
                const dropdown = document.querySelector(
                  ".notification-dropdown"
                );
                dropdown.classList.toggle("hide");
              }}
            >
              <i className="fa-solid fa-bell text-2xl"></i>
              <div className="dot">76</div>
            </div>
          )}

          <div className="notification-dropdown hide">
            <h4>Notification</h4>
            <hr />
            <div className="notification-item">
              <h6>Notification Head</h6>
              <p>
                Notification Desc such as Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
            <hr />
            <div className="notification-item">
              <h6>Notification Head</h6>
              <p>
                Notification Desc such as Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
            </div>
          </div>

          {/* Profile Dropdown */}

          <div
            className="sidebar-profile px-2 rounded border cursor-pointer hover:bg-slate-200 flex"
            onClick={() => {
              setIsOpen(!isOpen);
              // const dropdown = document.querySelector(".profile-dropdown");
              // dropdown.classList.toggle("hide");
            }}
          >
            <div className="sidebar-profile-img mx-1 flex">
              <img src={require("../../images/photo.png")} alt="" />
            </div>
            <div
              className="text-sm mx-1 flex"
              style={{ flexDirection: "column" }}
            >
              <p>Me</p>
              <i class="fa-solid fa-caret-down"></i>
            </div>
          </div>
          <div
            ref={openable}
            className={"profile-dropdown " + (isOpen ? "" : "hide")}
          >
            <div className="profile-dropdown-sec">
              <div className=" profile-dropdown-head flex">
                <div>
                  <img src={require("../../images/photo.png")} alt="" />
                </div>
                <div>
                  <h5>John Doe</h5>
                  <p>B.Tech, IIT Kharagpur</p>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="cust-btn view-profile-btn"
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                >
                  View Profile
                </button>
              </div>
            </div>
            <hr />
            <div className="profile-dropdown-sec">
              <div
                className="dropdown-btn"
                onClick={() => {
                  document.querySelector(".bookmark").style.visibility =
                    "visible";
                }}
              >
                <p>
                  <i class="fa-solid fa-bookmark"></i> Bookmarks
                </p>
              </div>
              <div className="dropdown-btn">
                <p>
                  <i class="fa-solid fa-triangle-exclamation"></i> Reschedule a
                  Mock Interview
                </p>
              </div>
              <div className="dropdown-btn">
                <p>
                  <i class="fa-solid fa-triangle-exclamation"></i> Cancel a Mock
                  Interview
                </p>
              </div>
              <div className="dropdown-btn">
                <p>
                  <i class="fa-solid fa-triangle-exclamation"></i> Report an
                  Issue
                </p>
              </div>
              <div className="dropdown-btn">
                <p>
                  <i class="fa-solid fa-gear"></i> Account Settings
                </p>
              </div>
            </div>
            <hr />
            <div className="profile-dropdown-sec">
              <div className="dropdown-logout-btn">
                <form action="http://localhost:8585/auth/logout">
                  <button type="submit" className="cust-btn logout-btn">
                    <i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbarlogedin;
