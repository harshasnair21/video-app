import React, { useEffect, useState } from "react";
import "./index.css";
// import Video from "../../images/video.jpg";
// import ChannelLogo from "../../images/harsha-logo.png";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import axios from "axios";

const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({});

  console.log("video.userId", video.userId);

  useEffect(() => {
    // if (!video || !video.userId) {
    //   console.log("no video");
    //   return;
    // }
    const fetchChannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setChannel(res.data);
    };
    fetchChannel();
  }, [video.userId]);
  // const timeAgo = new timeago();

  // const handleImageError = (e) => {
  //   e.preventDefault();
  //   e.target.src = "images/video.jpg";
  // };
  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: "none" }}>
      <div className={`card${type === "sm" ? "small" : ""}`}>
        <img
          src="images\video.jpg"
          alt="video"
          className={`image${type === "sm" ? "small" : ""}`}
          // onError={handleImageError}
        />
        <div className={`details${type === "sm" ? "small" : ""}`}>
          <div className={`channel-logo${type === "sm" ? "small" : ""}`}>
            <img src={channel.img} alt="logo" />
          </div>
          <div className="texts">
            <div className="title">{video.title}</div>
            <div className={`channel-name${type === "sm" ? "small" : ""}`}>
              {channel.name}
            </div>
            <div className="info">
              {video.views} views - {format(video.createdAt)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
