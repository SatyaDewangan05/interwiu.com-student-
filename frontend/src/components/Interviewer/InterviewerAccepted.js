import React from "react";
import "./InterviewerAccepted.css";
import InterviewerAcceptedNavbar from "./InterviewerAcceptedNavbar";
import { Link } from "react-router-dom";

function InterviewerAccepted() {
  return (
    <div>
      <InterviewerAcceptedNavbar />
      <div className="interviews">
        <div className="interviews-container" style={{ height: "auto" }}>
          <h1>Accepted Requests</h1>
          <div className="interviews-cont">
            <div className="interviews-list">
              <div className="interview-item">
                <div
                  className="interview-item-profile"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <img src={require("../../images/photo.png")} alt="Profile" />
                  <a
                    src="#"
                    style={{
                      textDecorationLine: "blink",
                      cursor: "pointer",
                      marginTop: "0px",
                      marginRight: "45px",
                    }}
                    className="hover-animation"
                  >
                    View Profile
                  </a>
                  <a
                    src="#"
                    style={{
                      textDecorationLine: "blink",
                      cursor: "pointer",
                      marginTop: "0px",
                      marginRight: "60px",
                    }}
                    className="hover-animation"
                  >
                    Resume
                  </a>
                </div>
                <div className="interview-item-info">
                  <div className="interviewer-head">
                    <h2>Utsav Bhardwaj</h2>
                    <p>B.Tech, Electrical Engg., IIT Kanpur</p>
                  </div>
                  <div className="details flex">
                    <div className="detail">
                      <p className="detail-head">Profile</p>
                      <p className="detail-body">Data Science</p>
                    </div>
                    <div className="detail">
                      <p className="detail-head">Session Duration</p>
                      <p className="detail-body">30 Min</p>
                    </div>
                    <div className="detail">
                      <p className="detail-head">Interview Slot</p>
                      <p className="detail-body">[5:00PM - 5:45PM]</p>
                      <p className="detail-body">20 June, 2022</p>
                    </div>
                  </div>

                  <div className="search-result-item-btns flex">
                    <div className="flex">
                      <div
                        style={{
                          border: "1px solid",
                          color: "red",
                          marginTop: "20px",
                          padding: "5px",
                        }}
                      >
                        Waiting for Utsav Bhardwaj to Pay and Confirm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="interview-item">
                <div
                  className="interview-item-profile"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <img src={require("../../images/photo.png")} alt="Profile" />
                  <a
                    src="#"
                    style={{
                      textDecorationLine: "blink",
                      cursor: "pointer",
                      marginTop: "0px",
                      marginRight: "45px",
                    }}
                    className="hover-animation"
                  >
                    View Profile
                  </a>
                  <a
                    src="#"
                    style={{
                      textDecorationLine: "blink",
                      cursor: "pointer",
                      marginTop: "0px",
                      marginRight: "60px",
                    }}
                    className="hover-animation"
                  >
                    Resume
                  </a>
                </div>
                <div className="interview-item-info">
                  <div className="interviewer-head">
                    <h2>XYZXYZ PPQ</h2>
                    <p>MS (Research), Mechanical Engg, IIT Madras</p>
                  </div>
                  <div className="details flex">
                    <div className="detail">
                      <p className="detail-head">Profile</p>
                      <p className="detail-body">Software Development</p>
                    </div>
                    <div className="detail">
                      <p className="detail-head">Session Duration</p>
                      <p className="detail-body">30 Min</p>
                    </div>
                    <div className="detail">
                      <p className="detail-head">Interview Slot</p>
                      <p className="detail-body">[3:00PM - 3:30PM]</p>
                      <p className="detail-body">20 June, 2022</p>
                    </div>
                  </div>

                  <div className="search-result-item-btns flex">
                    <div className="flex">
                      <div
                        style={{
                          border: "1px solid",
                          color: "red",
                          marginTop: "20px",
                          padding: "5px",
                        }}
                      >
                        Waiting for XYZXYZ PPQ to Pay and Confirm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="search-result-item">
                <div className="search-result-item-head flex">
                  <div className="interviewer-head">
                    <h3>PQR PQRABC</h3>
                    <p>PhD, Electrical Engg, IIT Delhi</p>
                  </div>
                  <a
                    src="#"
                    style={{
                      textDecorationLine: "blink",
                      cursor: "pointer",
                    }}
                    className="hover-animation"
                  >
                    Resume
                  </a>
                  <a
                    src="#"
                    style={{
                      textDecorationLine: "blink",
                      cursor: "pointer",
                    }}
                    className="hover-animation"
                  >
                    View Profile
                  </a>
                  <div className="search-result-item-profile">
                    <img
                      src={require("../../images/photo.png")}
                      alt="Profile"
                    />
                  </div>
                </div>
                <div className="details flex">
                  <div className="detail">
                    <p className="detail-head">Profile</p>
                    <p className="detail-body">Analytics</p>
                  </div>
                  <div className="detail">
                    <p className="detail-head">Session Duration</p>
                    <p className="detail-body">30 Min</p>
                  </div>
                  <div className="detail">
                    <p className="detail-head">Preferred Interview Slot</p>
                    <p className="detail-body">[9:30AM - 10:15AM]</p>
                    <p className="detail-body">22 June, 2022</p>
                  </div>
                </div>
                <div className="search-result-item-btns flex">
                  <div className="flex">
                    <div
                      style={{
                        border: "1px solid",
                        color: "#FFA07A",
                        marginTop: "20px",
                        marginRight: "20px",
                      }}
                    >
                      OFFER SENT
                    </div>
                    <div
                      style={{
                        border: "1px solid",
                        color: "#DC143C",
                        marginTop: "20px",
                        padding: "5px",
                      }}
                    >
                      Waiting for PQR PQRABC to ACCEPT
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="interviews-else">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                sapiente architecto, deserunt obcaecati illo soluta alias at
                dolore, libero quia necessitatibus animi autem ab! Ipsa
                veritatis perferendis magni? Ad, facere!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterviewerAccepted;
