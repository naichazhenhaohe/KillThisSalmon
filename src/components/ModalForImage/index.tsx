import React from "react";
import "./index.scss";

export default function Modal() {
  return (
    <div className="global-modal">
      <div className="modal-mask"></div>
      <div className="modal-box">
        <span className="hanger"></span>
      </div>
    </div>
  );
}
