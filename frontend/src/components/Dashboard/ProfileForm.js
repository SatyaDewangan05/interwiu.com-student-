import React from "react";
import { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ProfileForm.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

import Navbarlogedin from "./Navbarlogedin";
import data from "./data.js";

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const ProfileForm = (userDetails) => {
  const user = userDetails.user;
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  // let navigate = useNavigate();

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

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handlePrefChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

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
  // const arrayDays = JSON.stringify(days);
  // console.log(arrayDays);

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

  const [list, setList] = useState([]);

  const [inputs, setInputs] = useState({
    dfname: user.username,
    dlname: "",
    email: "",
    mobNumber: "",
    message: "",
    institute: "",
    program: "",
    branch: "",
    specialization: "",
    profilePreference: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      dfname: inputs.dfname,
      dlname: inputs.dlname,
      email: inputs.email,
      mobNumber: inputs.mobNumber,
      institute: inputs.institute,
      program: inputs.program,
      branch: inputs.branch,
      profilePreference: inputs.profilePreference,
      specialization: inputs.specialization,
    };

    console.log(inputs);

    // axios
    //   .patch(`http://localhost:8585/send/profile/${user.Id}`, userData)
    //   .then((response) => {
    //     console.log(response.status);
    //     console.log(response.data);
    //   });
    // window.alert("Are you sure?");
  };

  return (
    <>
      <Navbarlogedin />
      <div className="profile-form">
        <h1 className="text-4xl font-medium">Create an Account as a Student</h1>
        <form onSubmit={handleSubmit}>
          {/* Profile Form Container */}

          <div className="profile-form-cont">
            {/* Col-70 */}

            <div className="profile-form-text">
              {/* First Name and Last Name */}

              <div className="name cust-row flex">
                <div className="element">
                  <label htmlFor="firstname">
                    First Name<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="dfname"
                    className="border-2 rounded"
                    required
                    value={inputs.dfname || user.username}
                    onChange={handleChange}
                    placeholder="First Name"
                  />
                </div>
                <div className="element">
                  <label htmlFor="lastname">
                    Last Name<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="dlname"
                    className="border-2 rounded"
                    value={inputs.dlname}
                    onChange={handleChange}
                    placeholder="Last Name"
                  />
                </div>
              </div>

              {/* Email and Mobile Number */}

              <div className="email cust-row flex">
                <div className="element">
                  <label htmlFor="email">
                    Email<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="border-2 rounded"
                    value={inputs.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
                <div className="element">
                  <label htmlFor="number">
                    Mobile Number<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="number"
                    name="mobNumber"
                    className="border-2 rounded"
                    value={inputs.mobNumber}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                  />
                </div>
              </div>

              {/* Institution */}

              <div className="institution cust-row flex">
                <div className="element">
                  <label htmlFor="institute">
                    Institute<span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    name="institute"
                    id="institute"
                    required
                    className="border-2 rounded"
                    value={inputs.institute}
                    onChange={handleChange}
                    placeholder="Institute"
                  >
                    <option value="" disabled hidden>
                      Select Institute
                    </option>
                    <option value="IITKGP">IIT Bhilai</option>
                    <option value="IITB">IIT (BHU) Varanasi</option>
                    <option value="IITD">IIT Bhubaneswar</option>
                    <option value="IITM">IIT Bombay</option>
                    <option value="IITK">IIT Delhi</option>
                  </select>
                </div>
                <div className="element">
                  <label htmlFor="program">
                    Program<span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    name="program"
                    required
                    className="border-2 rounded"
                    value={inputs.program}
                    onChange={handleChange}
                    id="program"
                  >
                    <option value="" disabled hidden>
                      Select Program
                    </option>
                    {}
                    <option value="btech">B.Tech</option>
                    <option value="dual">Dual Degree (B.Tech + M.Tech)</option>
                    <option value="dualbsms">Dual Degree (BS + MS)</option>
                    <option value="mtech">M.Tech</option>
                    <option value="ms">MS (by Research)</option>
                    <option value="mba">MBA</option>
                    <option value="msc">M.Sc</option>
                    <option value="ima">Intergrated MA</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>
              </div>

              {/* Branch and Specialization */}

              <div className="branch cust-row flex">
                <div className="element">
                  <label htmlFor="branch">
                    Branch/Department<span style={{ color: "red" }}>*</span>
                  </label>
                  <select
                    name="branch"
                    required
                    className="border-2 rounded"
                    value={inputs.branch}
                    onChange={handleChange}
                    id="branch"
                  >
                    <option value="" disabled hidden>
                      Select Branch/Department
                    </option>
                    {data[1].branches.map((item) => {
                      return (
                        <option
                          value={item}
                          key={data[1].branches.indexOf(item)}
                        >
                          {item}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="element">
                  <label htmlFor="specialization">
                    Specialization (if applicable)
                  </label>
                  <input
                    type="text"
                    name="specialization"
                    className="border-2 rounded"
                    placeholder="Specialization"
                    value={inputs.specialization}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Project Title */}

              <div className="project cust-row flex">
                <div className="element">
                  <label htmlFor="projecttitle">
                    B.Tech/Dual Degree/M.Tech/MS/PhD Project Title
                  </label>
                  <input
                    type="text"
                    className="border-2 rounded"
                    name="projecttitle"
                    placeholder="Project Title"
                  />
                </div>
                {/* <div className="element">
                  <label htmlFor="preference">Recording Preference: </label>{" "}
                  <div className="preference">
                    <input
                      type="radio"
                      name="preference"
                      id="yes"
                      value={"yes"}
                    />
                    <label htmlFor="yes">Yes</label>
                    <input
                      type="radio"
                      name="preference"
                      id="no"
                      value={"no"}
                    />
                    <label htmlFor="no">No</label>
                  </div>
                </div> */}
              </div>

              {/* Profile Preference */}

              <div className="profilepref cust-row flex">
                <div className="element">
                  <label htmlFor="profilepref">Profile Preferences</label>
                  <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-chip-label">
                      Profile Preference
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-chip-label"
                      id="demo-multiple-chip"
                      multiple
                      label="Profile Preference"
                      value={personName}
                      onChange={handlePrefChange}
                      input={
                        <OutlinedInput id="select-multiple-chip" label="Chip" />
                      }
                      renderValue={(selected) => (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      {/* {names.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, personName, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))} */}
                      <MenuItem value="Data Science">Data Science</MenuItem>
                      <MenuItem value="Software">Software</MenuItem>
                      <MenuItem value="Banking and Finance">
                        Banking and Finance
                      </MenuItem>
                      <MenuItem value="Consulting">Consulting</MenuItem>
                      <MenuItem value="Analytics">Analytics</MenuItem>
                    </Select>
                  </FormControl>
                  <select
                    name="profilepref"
                    value={""}
                    className="border-2 rounded"
                    onChange={(e) => {
                      handleChange(e);
                      setList((item) => [...item, e.target.value]);
                    }}
                    id="profile-pref"
                  >
                    <option value="" disabled hidden>
                      Select Profile Preferences
                    </option>
                    <option value="Data Science">Data Science</option>
                    <option value="Software">Software</option>
                    <option value="Banking and Finance">
                      Banking and Finance
                    </option>
                    <option value="Consulting">Consulting</option>
                    <option value="Analytics">Analytics</option>
                  </select>
                </div>
                <div className="profile-pref-list">
                  {list.map((item) => {
                    return (
                      <div className="profile-pref-item">
                        <p>{item}</p>{" "}
                        <button
                          type="button"
                          className="cust-btn propref-btn"
                          onClick={(e) => {
                            const items = list.filter(
                              (item) =>
                                item !==
                                e.target.parentElement.childNodes[0].innerHTML
                            );
                            setList(items);
                          }}
                        >
                          x
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Time Preference */}

              {/* <div className="time-preference">
                <div className="element">
                  <p>General Day and Time Preferences for Sessions</p>
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
                    className="cust-btn add-time-btn"
                    onClick={() => {
                      const addPref = document.querySelector(".popup");
                      addPref.classList.remove("hide");
                    }}
                  >
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
              </div> */}
            </div>

            {/* Col-30 */}

            <div className="profile-form-profile">
              {/* Profile Photo */}

              <div className="profile-photo">
                <h4>Profile Photo</h4>
                <img
                  src={require("../../images/photo.png")}
                  className="upload"
                  alt="Upload"
                />
                <input
                  type="file"
                  name="profile"
                  id="profile"
                  value={inputs.profile || ""}
                  accept="image/png, image/jpg, image/jpeg"
                  onChange={(e) => {
                    handleChange(e);
                    var image = document.querySelector(".upload");
                    image.src = URL.createObjectURL(e.target.files[0]);
                  }}
                />
              </div>
              {/* Profile Resume */}

              <div className="profile-resume">
                <h4>Resume</h4>
                <button className="cust-btn resume-btn">
                  <a
                    href="#"
                    target="_black"
                    className="resume-a"
                    style={{ display: "none" }}
                  >
                    <i class="fa-solid fa-link"></i> Resume
                  </a>
                </button>
                <input
                  type="file"
                  name="resume"
                  id="resume"
                  required
                  accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  value={inputs.resume}
                  onChange={(e) => {
                    handleChange(e);
                    const resume = document.querySelector(".resume-a");
                    resume.style.display = "unset";
                    resume.href = URL.createObjectURL(e.target.files[0]);
                  }}
                />
              </div>
            </div>
          </div>
          <button type="submit" className="cust-btn create-btn">
            Update Details
          </button>
        </form>
      </div>
    </>
  );
};

export default ProfileForm;
