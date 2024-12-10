import React from "react";
import "./index.css";
import ChannelLogo from "../../images/harsha-logo.png";
import Card from "../../components/card";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../../components/comments";
const Video = () => {
  return (
    <div className="video-container">
      <div className="video">
        <div className="video-content">
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="460"
              src="https://www.youtube.com/embed/E-x3kIN0X0g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="title">Test Video</div>
        <div className="details">
          <span className="info">10001 Views - June 21 2024</span>
          <div className="buttons">
            <button className="video-btn">
              <ThumbUpOutlinedIcon />
              123
            </button>

            <button className="video-btn">
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </button>
            <button className="video-btn">
              <ReplyOutlinedIcon /> Share
            </button>
            <button className="video-btn">
              <AddTaskOutlinedIcon /> Save
            </button>
          </div>
        </div>
        <div className="hr"></div>
        <div className="channel">
          <div className="channel-info">
            <img src={ChannelLogo} alt="logo" className="image" />
            <div className="channel-details">
              <div className="channel-name"> Harsha's World</div>
              <div className="channel-counter"> 200K subscribers</div>
              <div className="channel-description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Impedit, dolorum optio. Illo aut modi laborum molestias
                reprehenderit unde similique, quisquam ipsa, sapiente, est
                aliquam repudiandae earum quam adipisci. Voluptatibus, debitis.
              </div>
            </div>
          </div>
          <button className="channel-button">Subscribe</button>
        </div>
        <div className="hr"></div>
        <Comments />
      </div>
      <div className="recommendation">
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </div>
    </div>
  );
};

export default Video;
