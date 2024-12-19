import React, { useEffect, useState } from "react";
import "./index.css";
// import ChannelLogo from "../../images/harsha-logo.png";
import Card from "../../components/card";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from "../../components/comments";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { dislike, fetchSuccess, like } from "../../redux/slices/videoSlice";
import { subscription } from "../../redux/slices/userSlice";
import { format } from "timeago.js";
import Recommendation from "../../components/recommendation";

const Video = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  console.log("Tags in currentVideo:", currentVideo?.tags);

  const path = useLocation().pathname.split("/")[2];
  // const [video, setVideo] = useState({});
  const [channel, setChannel] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`/videos/find/${path}`);
        // const userId = videoRes.data.userId;
        const channelRes = await axios.get(
          `/users/find/${videoRes.data.userId}`
        );
        // setVideo(videoRes.data);
        setChannel(channelRes.data);
        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {
        console.error("Error fetching video or channel data:", err);
      }
    };
    fetchData();
  }, [path, dispatch]);
  const handleLike = async () => {
    await axios.put(`/users/like/${currentVideo._id}`);
    dispatch(like(currentUser._id));
  };
  const handleDislike = async () => {
    await axios.put(`/users/dislike/${currentVideo._id}`);
    dispatch(dislike(currentUser._id));
  };
  console.log("Channel ID:", channel._id);

  const handleSubscribe = async () => {
    currentUser.subscribedUsers.includes(channel._id)
      ? await axios.put(`/users/unsub/${channel._id}`)
      : await axios.put(`/users/sub/${channel._id}`);
    dispatch(subscription(channel._id));
  };
  return (
    <div className="video-container">
      <div className="video">
        <div className="video-content">
          <div className="video-wrapper">
            <video
              className="curr-video"
              controls
              src={currentVideo?.videoUrl}
              title={currentVideo?.title || "video"}
            ></video>
          </div>
        </div>
        <div className="title">{currentVideo?.title}</div>
        <div className="details">
          <span className="info">
            {currentVideo?.views || 0} Views .{" "}
            {format(currentVideo?.createdAt || new Date())}
          </span>
          <div className="buttons">
            <button className="video-btn" onClick={handleLike}>
              {currentVideo?.likes?.includes(currentUser._id) ? (
                <ThumbUpIcon />
              ) : (
                <ThumbUpOutlinedIcon />
              )}
              {currentVideo?.likes?.length}
            </button>
            <button className="video-btn" onClick={handleDislike}>
              {currentVideo?.dislikes?.includes(currentUser._id) ? (
                <ThumbDownIcon />
              ) : (
                <ThumbDownOffAltOutlinedIcon />
              )}
              {currentVideo?.dislikes?.length}
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
            <img src={channel?.img} alt="logo" className="image" />

            <div className="channel-details">
              <div className="channel-name"> {channel?.name}</div>
              <div className="channel-counter">
                {channel?.subscribers} subscribers
              </div>
              <div className="channel-description">
                {currentVideo?.description}
              </div>
            </div>
          </div>
          <button className="channel-button" onClick={handleSubscribe}>
            {currentUser.subscribedUsers?.includes(channel._id)
              ? "SUBSCRIBED"
              : "SUBSCRIBE"}
          </button>
        </div>
        <div className="hr"></div>
        <Comments videoId={currentVideo._id} />
      </div>
      <div className="recommendation">
        {/* <h2>Recommendations</h2> */}
        <Recommendation tags="js" />
      </div>
    </div>
  );
};

export default Video;
