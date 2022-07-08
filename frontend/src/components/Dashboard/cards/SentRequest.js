import React from "react";

const SentRequest = () => {
  return (
    <>
      <div className="sent-item my-2 p-2">
        <div className="sent-item-profile">
          <img src={require("../../../images/photo.png")} alt="Profile" />
          <button className="cust-btn sent-view-btn">View Profile</button>
        </div>
        <div className="sent-item-info">
          <div className="sent-item-head">
            <div>
              <div className="flex py-1 justify-between w-full">
                <div className="interviewer-logo">
                  <img
                    src={require("../../../images/amazon.png")}
                    alt="google"
                  />
                </div>
                <div>
                  <div>
                    <h4 className="text-2xl font-medium leading-4">John Doe</h4>
                    <p>SDE, Amazon, San Francisco</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="head-icon flex">
                    <i class="fa-solid fa-bookmark"></i>
                  </div>
                  <div className="head-icon flex">
                    <i class="fa-solid fa-share"></i>
                  </div>
                </div>
              </div>
              <div className="details flex">
                <div className="detail">
                  <p className="detail-head">Profile</p>
                  <p className="detail-body">Data Science</p>
                </div>
                <div className="detail">
                  <p className="detail-head">Price</p>
                  <p className="detail-body">INR 1200</p>
                </div>
                <div className="detail">
                  <p className="detail-head">Session Duration</p>
                  <p className="detail-body">45 Min</p>
                </div>
                <div className="detail">
                  <p className="detail-head">Interview Slot</p>
                  <p className="detail-body">[5:00PM - 5:45PM]</p>
                  <p className="detail-body">20 June, 2022</p>
                </div>
              </div>
              <div className="sent-item-btns flex justify-center">
                <p className="text-green-700 font-medium text-lg border-2  px-2 py-1 rounded">
                  <i class="fa-solid fa-check"></i> Request Sent
                </p>
                <div className="cancel-dropdown-cont">
                  <div className="cancel-dropdown flex">
                    <i class="fa-solid fa-caret-right"></i>
                  </div>
                  <button
                    className="cust-btn cancel-btn"
                    onClick={() => {
                      document.querySelector(".cancel-popup").style.visibility =
                        "visible";
                    }}
                  >
                    Cancel Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SentRequest;
