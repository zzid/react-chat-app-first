import React from "react";

import closeIcon from "../icons/closeIcon.png";
import onlineIcon from "../icons/onlineIcon.png";

const InfoBar = ({ room }) => (
    <div className="info-bar">
        <div className="left-inner-container">
            <img src={onlineIcon} alt="online" className="online-icon" />
            <h3>{room}</h3>
        </div>
        <div className="right-inner-container">
            <a href="/">
                <img src={closeIcon} alt="close" className="online-icon" />
            </a>
        </div>
    </div>
);

export default InfoBar;
