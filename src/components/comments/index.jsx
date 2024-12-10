import React from "react";
import "./index.css";
import ChannelLogo from "../../images/harsha-logo.png";
import Comment from "../comment";

const Comments = () => {
  return (
    <div className="comments-container">
      <div className="new-comment">
        <img src={ChannelLogo} alt="logo" className="avatar" />
        <input placeholder="Add a Comment..." />
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
