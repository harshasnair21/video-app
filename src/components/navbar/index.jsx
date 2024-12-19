import React, { useState } from "react";
import "./index.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Upload from "../upload";
const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="navbar-container">
        <div className="navbar">
          <div className="search">
            <input placeholder="Search" />
            <SearchOutlinedIcon />
          </div>
          {currentUser ? (
            <div className="user">
              <VideoCallOutlinedIcon
                className="video-btn"
                onClick={() => {
                  setOpen(true);
                }}
              />
              <img
                src={
                  currentUser.img
                    ? currentUser.img
                    : "client/public/logo512.png"
                }
                alt=""
                className="image"
              />
              {currentUser.name}
            </div>
          ) : (
            <Link to="signin" style={{ textDecoration: "none" }}>
              <button>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </button>
            </Link>
          )}
        </div>
      </div>
      {open && <Upload setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
