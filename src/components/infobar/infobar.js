import React from "react";
import "./infobar.css";
require("../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css");

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <span className="onlineIcon"></span>

      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <i className="far fa-window-close"></i>
      </a>
    </div>
  </div>
);

export default InfoBar;
