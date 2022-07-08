import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import axios from "axios";
import "./SearchInterviews.css";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import IconButton from "@material-ui/core/IconButton";
import Interview from "./cards/Interview";
import DateTimePicker from "../DateTimePicker/DateTimePicker";

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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

// const changeLink = () => {
//   const links = document.querySelectorAll(".nav-item a");
//   links.forEach((link) => {
//     if (link.classList.contains("active")) {
//       link.classList.remove("active");
//     }
//     if (link.innerHTML === "Search Interviews") {
//       link.classList.add("active");
//     }
//   });
// };

const SearchInterviews = () => {
  // const user = userDetails.user;

  const mnc = [
    "Wal-Mart Stores",
    "Exxon Mobil",
    "Chevron",
    "Berkshire Hathaway",
    "Apple",
    "Phillips 66",
    "General Motors",
    "Ford Motor",
    "General Electric",
    "Valero Energy",
    "AT&T",
    "CVS Caremark",
    "Fannie Mae",
    "UnitedHealth Group",
    "McKesson",
  ];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleSelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // const clientHeight = document.querySelector(".search-result").clientHeight;
  // const filterHeight = document.querySelector(".search-pref").clientHeight;
  // console.log("clientHeight: ", clientHeight, " filterHeight: ", filterHeight);
  // var addedMargin = clientHeight - filterHeight;
  // var footer = document.getElementById("footer").getBoundingClientRect();
  // console.log("footerHeight: ", footer.top);

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);
    if (currentScrollPos >= 165 && currentScrollPos < 736) {
      // console.log(document.querySelector(".search-pref").classList);
      console.log("stuck");
      document.querySelector(".search-pref").classList.add("static");
      document.querySelector(".search-pref").classList.remove("static-a");
    } else if (currentScrollPos >= 736) {
      console.log("working");
      document.querySelector(".search-pref").classList.remove("static");
      document.querySelector(".search-pref").classList.add("static-a");
      // document.querySelector(".search-pref").style.marginTop = footer.top;
    } else {
      // console.log("not");
      document.querySelector(".search-pref").classList.remove("static");
      document.querySelector(".search-pref").classList.remove("static-a");
    }
    // prevScrollpos = currentScrollPos;
  };

  const display = (day) => {
    const date = day.toLocaleDateString();
    day = day.getDay();
    if (day === 0) {
      return <Sunday date={date} />;
    } else if (day === 1) {
      return <Monday date={date} />;
    } else if (day === 2) {
      return <Tuesday date={date} />;
    } else if (day === 3) {
      return <Wednesday date={date} />;
    } else if (day === 4) {
      return <Thursday date={date} />;
    } else if (day === 5) {
      return <Friday date={date} />;
    } else {
      return <Saturday date={date} />;
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
  // useEffect(() => {
  //   changeLink();
  // }, []);

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
  const [search, setSearch] = useState("");
  return (
    <>
      <Navbarlogedin />
      <div className="searching">
        <h2
          className="font-[500] border-2 border-black drop-shadow-md"
          style={{ fontSize: "28px" }}
        >
          Find an Interviewer of your choice for a Mock Interview with Feedback
          Session
        </h2>

        <div className="searching-cont clearfix">
          <div className="search-pref">
            <div
              className="w-auto text-lg px-2 py-1 border-2 rounded bg-white flex justify-between"
              id="searchbar-input"
            >
              <input
                type="text"
                className="mx-1 py-2 outline-none w-auto"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                name="search"
                id="search"
                placeholder="Search Interviewer by Name"
              />
              <div
                class="text-2xl w-auto cursor-pointer hover:text-sky-200"
                id="search-bar"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
            <h4 className="text-center my-2 text-sky-600 text-xl">
              Filters <i class="fa-solid fa-filter"></i>
            </h4>
            <div className="my-3">
              <FormControl className="w-full">
                <InputLabel id="profile">
                  <em>Profile Preference</em>
                </InputLabel>
                <Select
                  displayEmpty
                  labelId="profile"
                  value={personName}
                  onChange={handleSelectChange}
                  label="Profile Preference"
                  // input={<OutlinedInput />}
                  // MenuProps={MenuProps}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {/* <MenuItem disabled hidden value="">
                    <em>Profile</em>
                  </MenuItem> */}
                  <MenuItem value="none">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="ds">Data Science</MenuItem>
                  <MenuItem value="software">Software</MenuItem>
                  <MenuItem value="banking">Banking and Finance</MenuItem>
                  <MenuItem value="consulting">Consulting</MenuItem>
                  <MenuItem value="analytics">Analytics</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="my-3 border p-2 rounded">
              <label htmlFor="charges">Charges</label>
              <div className="flex px-1 justify-between border rounded">
                <p className="text-xl w-40 text-center">Below</p>
                <FormControl fullWidth sx={{ my: 1, width: "15ch" }}>
                  <InputLabel htmlFor="below">Below</InputLabel>
                  <OutlinedInput
                    id="below"
                    defaultValue={0}
                    startAdornment={
                      <InputAdornment position="start">&#x20B9;</InputAdornment>
                    }
                    label="Below"
                  />
                </FormControl>
              </div>
              <div className="flex px-1 justify-between border rounded">
                <p className="text-xl w-40 text-center">Above</p>
                <FormControl fullWidth sx={{ my: 1, width: "15ch" }}>
                  <InputLabel htmlFor="above">Above</InputLabel>
                  <OutlinedInput
                    id="above"
                    defaultValue={1200}
                    startAdornment={
                      <InputAdornment position="start">&#x20B9;</InputAdornment>
                    }
                    label="Below"
                  />
                </FormControl>
              </div>
            </div>
            <div className="my-3">
              <FormControl className="w-full">
                <InputLabel id="company">
                  <em>Company of the Interviewer</em>
                </InputLabel>
                <Select
                  displayEmpty
                  labelId="company"
                  value={personName}
                  onChange={handleSelectChange}
                  label="Company of the Interviewer"
                  // input={<OutlinedInput />}
                  MenuProps={MenuProps}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {/* <MenuItem disabled hidden value="">
                    <em>Company of the Interviewer</em>
                  </MenuItem> */}
                  <MenuItem value="none">
                    <em>None</em>
                  </MenuItem>
                  {mnc.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="my-3">
              <p className="text-justify text-lg text-green-800 font-medium">
                Do you want to specify your Scheduling Preferences for this mock
                interview (with feedback) session?
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

            <DateTimePicker />
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
            <h3 className="text-xl font-[500]">Search results (48)</h3>
            <div className="search-result-cont">
              {cards?.map((result) => (
                <>
                  <Interview
                    name={result.name}
                    desg={result.desg}
                    price={result.price}
                    logo={require("../../images/amazon.png")}
                  />
                  <Interview
                    name="John Doe"
                    desg="SDE, Google, California"
                    price="1200"
                    logo={require("../../images/google.png")}
                  />
                  <Interview
                    name="John Doe"
                    desg="SDE, Amazon, San Francisco"
                    price="1200"
                    logo={require("../../images/amazon.png")}
                  />
                  <Interview
                    name="John Doe"
                    desg="SDE, Google, California"
                    price="1200"
                    logo={require("../../images/google.png")}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchInterviews;
