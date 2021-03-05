import React from "react";

import closeIcon from "../icons/closeIcon.png";
import onlineIcon from "../icons/onlineIcon.png";
import { Link } from "react-router-dom";

const InfoBar = ({ room }) => (
    <div className="info-bar">
        <div className="left-inner-container">
            <img src={onlineIcon} alt="online" className="online-icon" />
            <h3>{room}</h3>
        </div>
        <div className="right-inner-container">
            <Link to="/">
                <img src={closeIcon} alt="close" className="online-icon" />
            </Link>
        </div>
    </div>
);

export default InfoBar;
