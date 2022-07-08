<>
<div className="search-pref">
            <div
              className="right-24 w-72 p-2 text-lg rounded bg-white flex "
              id="searchbar-input"
            >
              <input
                type="text"
                className="p-2 mx-1 w-64 border-2 rounded"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                name="search"
                id="search"
                placeholder="Search Interviewer by Name"
              />
            </div>
            <h4 className="text-center text-sky-600 text-xl">
              Filters <i class="fa-solid fa-filter"></i>
            </h4>
            <div>
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
            </div>
            <div className="charge-limit">
              {/* <h4>Charge Limits </h4> */}
              <label htmlFor="charge">Charge Limits</label>
              <div className="below flex">
                {/* <input type="checkbox" name="charge" id="below" /> */}
                <label htmlFor="below">Below INR</label>
                <input
                  type="number"
                  defaultValue={"500"}
                  className="charge-limit-box border rounded"
                />
              </div>
              <div className="above flex">
                {/* <input type="checkbox" name="charge" id="above" /> */}
                <label htmlFor="above">Above INR</label>
                <input
                  type="number"
                  defaultValue={"2000"}
                  className="charge-limit-box border bounded"
                />
              </div>
            </div>
            <div className="org">
              <label htmlFor="org">Company of the Interviewer</label>
              {/* <input
                type="text"
                id="org"
                placeholder="Name of the Organization"
              /> */}
              <div>
                <FormControl sx={{ width: 280 }}>
                  <Select
                    displayEmpty
                    value={personName}
                    onChange={handleSelectChange}
                    input={<OutlinedInput />}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      <em>Placeholder</em>
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


  <div className="dashboard">
        <button
          className="cust-btn update-btn"
          type="button"
          onClick={() => {
            navigate("/profile-form");
          }}
        >
          <i class="fa-solid fa-pen-to-square"></i> Update
        </button>
        <div className="bio">
          <div className="dashboard-info">
            <div className="profile-photo">
              <img
                src={require("../../images/photo.png")}
                alt="Profile-photo"
              />
            </div>
            <h2>{user.username}</h2>
            <h5>
              B.Tech <br /> Computer Science Engineering <br /> MIT, Cambridge,
              MA 02139, United States
            </h5>
            <button className="cust-btn resume-btn" type="button">
              <a
                href={require("../../images/cs_2022.pdf")}
                target="_black"
                className="resume-a"
              >
                <i class="fa-solid fa-link"></i> Resume
              </a>
            </button>
          </div>
          <div className="dashboard-desc">
            <h1 className="head">My Profile</h1>
            <div className="desc-pref desc-pro-pref">
              <p className="desc-head">
                Profile Preferences
                <button
                  className="cust-btn edit-btn"
                  type="button"
                  onClick={() => {
                    document.querySelector(".desc-pref-edit").style.display =
                      "unset";
                  }}
                >
                  <i class="fa-solid fa-pen-to-square"></i> Edit
                </button>
              </p>
              <ul className="desc-item">
                {list?.map((item) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
            <div className="desc-pref-edit">
              <div
                className="desc-cross"
                onClick={() => {
                  document.querySelector(".desc-pref-edit").style.display =
                    "none";
                }}
              >
                <i class="fa-solid fa-circle-xmark"></i>
              </div>
              <select
                name="profilepref"
                value={""}
                onChange={(e) => {
                  setList((item) => [...item, e.target.value]);
                }}
                id="profile-pref"
              >
                <option value="" disabled hidden>
                  Select Profile Preferences
                </option>
                <option value="Data Science">Data Science</option>
                <option value="Software">Software</option>
                <option value="Banking and Finance">Banking and Finance</option>
                <option value="Consulting">Consulting</option>
                <option value="Analytics">Analytics</option>
              </select>
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
              <button type="button">Update</button>
            </div>
            {/* <div className="desc-pref">
              <p className="desc-head">
                General Day/Time Preference for Sessions
                <button
                  className="cust-btn edit-btn"
                  type="button"
                  // onClick={() => {
                  //   navigate("/profile-form");
                  // }}
                >
                  <i class="fa-solid fa-pen-to-square"></i> Edit
                </button>
              </p>
              <ul className="desc-item">
                <li>Sat (3-5 PM)</li>
                <li>Sun (3-5 PM)</li>
                <li>Wed (9 AM - 5PM)</li>
                <li>No Specific Preferences (Only when ticked)</li>
              </ul>
            </div> */}
            <div className="dashboard-btns">
              <div className="interviewer">
                <p className="cont">
                  If you are looking to appear for a Mock Interview of your
                  choice and receive Personalized Feedback
                </p>
                <button
                  className="cust-btn dashboard-btn"
                  type="button"
                  onClick={() => {
                    navigate("/searching");
                  }}
                >
                  Find an Interviewer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>