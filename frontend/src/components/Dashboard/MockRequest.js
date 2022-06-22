import React from "react";

import "./MockRequest.css";

const remove = () => {
  const requestPopup = document.querySelector(".mock-request-popup-container");
  requestPopup.classList.add("hide");
};

const MockRequest = () => {
  return (
    <div className="mock-request-popup-container hide">
      <div className="mock-request-popup">
        <div
          className="cross"
          onClick={() => {
            remove();
          }}
        >
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
        <h3>
          Request a Mock Interview and Feedback Session <br /> to Mr. John Doe
        </h3>
        <div className="slot-pick">
          <div className="flex">
            <input type="radio" name="interview-slot" id="mon" />
            <label htmlFor="mon">Monday (5PM - 7PM)</label>
          </div>
          <div className="flex">
            <input type="radio" name="interview-slot" id="tue" />
            <label htmlFor="tue">Tuesday (5PM - 7PM)</label>
          </div>
          <div className="flex">
            <input type="radio" name="interview-slot" id="wed" />
            <label htmlFor="wed">Wednesday (5PM - 7PM)</label>
          </div>
          <div className="flex">
            <input type="radio" name="interview-slot" id="thur" />
            <label htmlFor="thur">Thursday (5PM - 7PM)</label>
          </div>
          <div className="flex">
            <input type="radio" name="interview-slot" id="fri" />
            <label htmlFor="fri">Friday (5PM - 7PM)</label>
          </div>
          <div className="flex">
            <input type="radio" name="interview-slot" id="sat" />
            <label htmlFor="sat">Saturday (5PM - 7PM)</label>
          </div>
          <div className="flex">
            <input type="radio" name="interview-slot" id="sun" />
            <label htmlFor="sun">Sunday (5PM - 7PM)</label>
          </div>
        </div>
        <div className="send-btns flex">
          <button type="button" className="cust-btn send-btn">
            Send Request
          </button>
          <button type="button" className="cust-btn send-btn">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default MockRequest;
