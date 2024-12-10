import React from "react";
import "./index.css";
import Video from "../../images/video.jpg";
import ChannelLogo from "../../images/harsha-logo.png";
import { Link } from "react-router-dom";

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <div className={`card${type === "sm" ? "small" : ""}`}>
        <img
          src={Video}
          alt="video"
          className={`image${type === "sm" ? "small" : ""}`}
        />
        <div className={`details${type === "sm" ? "small" : ""}`}>
          <div className={`channel-logo${type === "sm" ? "small" : ""}`}>
            <img src={ChannelLogo} alt="logo" />
          </div>
          <div className="texts">
            <div className="title">Test Video</div>
            <div className={`channel-name${type === "sm" ? "small" : ""}`}>
              Harsha's World
            </div>
            <div className="info">1000 views- 1 day ago</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
