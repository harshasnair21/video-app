import React, { useEffect, useState } from "react";
import "./index.css";
import ChannelLogo from "../../images/harsha-logo.png";
import Comment from "../comment";
import axios from "axios";
import { useSelector } from "react-redux";

const Comments = ({ videoId }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [comment, setComment] = useState([]);
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`/comments/video/${videoId}`);
        console.log("Fetched Comments:", res.data);
        setComment(res.data || []);
      } catch (err) {
        console.error("Error fetching comments:", err);
      }
    };
    fetchComments();
  }, [videoId]);
  return (
    <div className="comments-container">
      <div className="new-comment">
        <img
          src={currentUser.img || ChannelLogo}
          alt="logo"
          className="avatar"
        />
        <input placeholder="Add a Comment..." />
      </div>
      {comment.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default Comments;
