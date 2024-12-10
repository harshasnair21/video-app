import React from "react";
import "./index.css";
import ChannelLogo from "../../images/harsha-logo.png";

const Comment = () => {
  return (
    <div className="comment-container">
      <div className="comment">
        <img src={ChannelLogo} alt="logo" className="avatar" />
        <div className="details">
          <div className="details-new">
            <span className="name">Harsha</span>
            <span className="date">1 day ago</span>
          </div>
          <span className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            optio laudantium fuga sint expedita deleniti beatae nostrum earum,
            provident ipsum ea architecto dolorum, facere doloremque, aliquid
            animi quas. Fugiat, quod.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
