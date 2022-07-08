import React from "react";

import "./CancelRequest.css";

const CancelRequest = () => {
  return (
    <div className="cancel-popup">
      <div className="cancel-popup-container">
        <h4>Are you sure?</h4>
        <div className="btns">
          <button type="button">Yes</button>
          <button
            type="button"
            onClick={() => {
              document.querySelector(".cancel-popup").style.visibility =
                "hidden";
            }}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelRequest;
