import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import axios from "axios";
import "./SearchInterviews.css";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@material-ui/core/IconButton";

import {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
} from "./days";

import Navbarlogedin from "./Navbarlogedin";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const changeLink = () => {
  const links = document.querySelectorAll(".nav-item a");
  links.forEach((link) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active");
    }
    if (link.innerHTML === "Search Interviews") {
      link.classList.add("active");
    }
  });
};

const SearchInterviews = () => {
  // const user = userDetails.user;
  const display = (day) => {
    const date=day.toLocaleDateString();
    day=day.getDay();
    if (day === 0) {
      return <Sunday date={date}/>;
    } else if (day === 1) {
      return <Monday date={date}/>;
    } else if (day === 2) {
      return <Tuesday date={date}/>;
    } else if (day === 3) {
      return <Wednesday date={date}/>;
    } else if (day === 4) {
      return <Thursday date={date}/>;
    } else if (day === 5) {
      return <Friday date={date}/>;
    } else {
      return <Saturday date={date}/>;
    }
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [date, setDate] = useState(new Date());

  const [cards, setCards] = React.useState();
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(
        "http://localhost:8585/send/interviewersdemo"
      );
      setCards(req.data);
    }
    fetchData();
  }, []);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  useEffect(() => {
    changeLink();
  }, []);

  const [expanded, setExpanded] = useState(true);

  const showCheckboxes = () => {
    var checkboxes = document.getElementById("checkboxes");
    if (expanded) {
      checkboxes.style.display = "block";
      setExpanded(false);
    } else {
      checkboxes.style.display = "none";
      setExpanded(true);
    }
  };

  const [days, setDays] = useState({});

  const handleDaysChange = (e) => {
    const day = e.target.id;
    const bolValue = e.target.checked;
    setDays({ ...days, [day]: bolValue });
  };

  const [time, setTime] = useState({});

  const handleTimeChange = (e) => {
    const timing = e.target.id;
    setTime({ ...time, [timing]: e.target.value });
  };

  const showResult = () => {
    const searchResult = document.querySelector(".search-result-cont");
    searchResult.classList.remove("hide");
  };
  return (
    <>
      <Navbarlogedin />
      <div className="searching">
        <h1>
          Find an Interviewer of your choice for a Mock Interview with Feedback
          Session
        </h1>
        <div className="searching-cont">
          <div className="search-pref">
            <label htmlFor="profile">Profile Preference</label>
            <select name="profile" id="profile">
              <option value="" disabled selected hidden>
                Select Profile
              </option>
              <option value="ds">Data Science</option>
              <option value="software">Software</option>
              <option value="banking">Banking and Finance</option>
              <option value="consulting">Consulting</option>
              <option value="analytics">Analytics</option>
            </select>
            <div className="charge-limit">
              <h4>Charge Limits </h4>
              <div className="below flex">
                <input type="checkbox" name="charge" id="below" />
                <label htmlFor="below">Below INR</label>
                <input
                  type="number"
                  defaultValue={"500"}
                  className="charge-limit-box"
                />
              </div>
              <div className="above flex">
                <input type="checkbox" name="charge" id="above" />
                <label htmlFor="above">Above INR</label>
                <input
                  type="number"
                  defaultValue={"2000"}
                  className="charge-limit-box"
                />
              </div>
            </div>
            <div className="org">
              <label htmlFor="org">Desired Organization of Interviewer</label>
              <input
                type="text"
                id="org"
                placeholder="Name of the Organization"
              />
            </div>
            <div className="time-preference">
              <div className="element">
                <p style={{ textAlign: "justify" }}>
                  Do you want to specify your Scheduling Preferences for this
                  mock interview (with feedback) session?
                </p>
                <div className="element-item">
                  <input type="checkbox" name="preference" id="preference" />
                  <label htmlFor="preference"> No Specific Preferences</label>
                </div>
                <div className="pref-item">
                  <ul>
                    <li>
                      Monday - 12:00 to 13:00{" "}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.target.parentElement.parentElement.remove();
                        }}
                        className="cust-btn trash-btn"
                      >
                        <i class="fa-solid fa-trash-can"></i>
                      </button>
                    </li>
                  </ul>
                </div>
                <button
                  type="button"
                  className="cust-btn search-add-time-btn"
                  onClick={() => {
                    const addPref = document.querySelector(".popup");
                    addPref.classList.remove("hide");
                  }}
                >
                  <span style={{ fontSize: "24px", margin: "5px 5px" }}>+</span>{" "}
                  Add Time Preference
                </button>
              </div>
              <div className="popup hide">
                <button
                  type="button"
                  className="cust-btn close-btn"
                  onClick={() => {
                    const addPref = document.querySelector(".popup");
                    addPref.classList.add("hide");
                  }}
                >
                  <i className="fa-solid fa-circle-xmark"></i>
                </button>

                {/* ------------------------- */}
                <div className="select flex">
                  <div class="multiselect">
                    <h5>Choose the days</h5>
                    <div
                      class="selectBox"
                      onClick={() => {
                        showCheckboxes();
                      }}
                    >
                      <select>
                        <option>Select Days</option>
                      </select>
                      <div class="overSelect"></div>
                    </div>
                    <div id="checkboxes">
                      <label for="monday">
                        <input
                          type="checkbox"
                          checked={days["monday"] || false}
                          onChange={handleDaysChange}
                          id="monday"
                        />
                        Monday
                      </label>
                      <label for="tuesday">
                        <input
                          type="checkbox"
                          checked={days["tuesday"] || false}
                          onChange={handleDaysChange}
                          id="tuesday"
                        />
                        Tuesday
                      </label>
                      <label for="wednesday">
                        <input
                          type="checkbox"
                          checked={days["wednesday"] || false}
                          onChange={handleDaysChange}
                          id="wednesday"
                        />
                        Wednesday
                      </label>
                      <label for="thursday">
                        <input
                          type="checkbox"
                          checked={days["thursday"] || false}
                          onChange={handleDaysChange}
                          id="thursday"
                        />
                        Thrusday
                      </label>
                      <label for="friday">
                        <input
                          type="checkbox"
                          checked={days["friday"] || false}
                          onChange={handleDaysChange}
                          id="friday"
                        />
                        Friday
                      </label>
                      <label for="saturday">
                        <input
                          type="checkbox"
                          checked={days["saturday"] || false}
                          onChange={handleDaysChange}
                          id="saturday"
                        />
                        Saturday
                      </label>
                      <label for="sunday">
                        <input
                          type="checkbox"
                          checked={days["sunday"] || false}
                          onChange={handleDaysChange}
                          id="sunday"
                        />
                        Sunday
                      </label>
                      <label for="custom">
                        <input
                          type="checkbox"
                          checked={days["custom"] || false}
                          onChange={handleDaysChange}
                          id="custom"
                        />
                        Custom
                      </label>
                    </div>
                  </div>
                  {/* -------------------- */}
                  <div className="time">
                    <h5>Choose Time</h5>
                    <div className="flex">
                      <div>
                        <label htmlFor="from">From</label>
                        <input
                          type="time"
                          value={time["from"] || "00:00"}
                          onChange={handleTimeChange}
                          name="from"
                          id="from"
                        />
                      </div>
                      <div>
                        <label htmlFor="to">To</label>
                        <input
                          type="time"
                          name="to"
                          value={time["to"] || "00:00"}
                          onChange={handleTimeChange}
                          id="to"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    console.log(
                      "Days: " +
                        JSON.stringify(days) +
                        "Time: " +
                        JSON.stringify(time)
                    );
                    const addPref = document.querySelector(".popup");
                    addPref.classList.add("hide");
                  }}
                  className="cust-btn add-btn"
                >
                  Add
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="cust-btn find-btn"
              onClick={(e) => {
                e.preventDefault();
                showResult();
              }}
            >
              Apply Preference
            </button>
          </div>
          <div className="search-result">
            <h3>Search result</h3>
            <div className="search-result-cont">
              {cards?.map((result) => (
                <div className="search-result-item">
                  <div className="search-result-item-head flex">
                    <div>
                      <div className="interviewer-head">
                        <h3>{result.name}</h3>
                        <p>{result.desg}</p>
                      </div>
                      <div className="details flex">
                        <div className="detail">
                          <p className="detail-head">Profile</p>
                          <p className="detail-body">Data Science</p>
                        </div>
                        <div className="detail">
                          <p className="detail-head">Price</p>
                          <p className="detail-body">INR {result.price}</p>
                        </div>
                        <div className="detail">
                          <p className="detail-head">Session Duration</p>
                          <p className="detail-body">30 Min</p>
                        </div>
                      </div>
                    </div>
                    <div className="search-result-item-profile">
                      <img
                        src={require("../../images/photo.png")}
                        alt="Profile"
                      />
                      <button
                        className="cust-btn view-btn"
                        onClick={() => {
                          navigate("/interviewer-dashboard");
                        }}
                      >
                        View Profile
                      </button>
                    </div>
                  </div>
                  <div className="search-result-item-desc">
                    <div className="time-preference">
                      <p>Slots Available </p>
                      <ul className="slot-list">
                        <li>Sun (5-7 pm)</li>
                        <li>Mon (3-4 pm)</li>
                        <li>Tue (5-7 pm)</li>
                        <li>Wed (3-4 pm)</li>
                        <li>Thur(5-7 pm)</li>
                        <li>Fri (3-4 pm)</li>
                        <li>Sat (5-7 pm)</li>
                      </ul>
                    </div>
                    <div className="search-result-item-btns flex">
                      <Button variant="contained" onClick={handleOpen}>
                        Request a Mock Interview with Feedback Session
                      </Button>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                      >
                        <Box sx={style}>

                         
                        <Box
                          sx={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                          }}
                        >
                          <IconButton onClick={handleClose}>
                            <CloseIcon />
                          </IconButton>
                        </Box>
                          <Typography
                            id="modal-modal-title"
                            variant="h5"
                            sx={{
                              fontWeight: "bold",
                              textAlign: "center",
                            }}
                          >
                            Request a Mock Interview with Mr. John Doe
                          </Typography>

                          <Grid container spacing={2}>
                            <Grid xs={6}>
                              <LocalizationProvider
                                dateAdapter={AdapterDateFns}
                              >
                                <CalendarPicker
                                  date={date}
                                  format="dd/MM/yyyy"
                                  onChange={(newDate) => setDate(newDate)}
                                  views={["day"]}
                                  disablePast={true}
                                />
                              </LocalizationProvider>
                            </Grid>

                            <Grid
                              xs={6}
                              sx={{
                                mt: 2,
                              }}
                            >
                              {display(date)}
                            </Grid>
                            <Grid xs={12} sx={{ textAlign: "center" }}>
                              <Button variant="contained">Confirm Slot</Button>
                            </Grid>
                          </Grid>
                        </Box>
                      </Modal>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchInterviews;
