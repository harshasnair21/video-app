import React, { useEffect, useState } from "react";
import "./index.css";
// import ChannelLogo from "../../images/harsha-logo.png";
import axios from "axios";

const Comment = ({ comment }) => {
  const [channel, setChannel] = useState({});
  useEffect(() => {
    const fetchComment = async () => {
      const res = await axios.get(`/users/find/${comment.userId}`);
      setChannel(res.data);
    };
    fetchComment();
  }, [comment.userId]);

  return (
    <div className="comment-container">
      <div className="comment">
        <img src={channel.img} alt="logo" className="avatar" />
        <div className="details">
          <div className="details-new">
            <span className="name">{channel.name}</span>
            <span className="date">1 day ago</span>
          </div>
          <span className="text">{comment.desc}</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
