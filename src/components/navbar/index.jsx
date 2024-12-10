import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="search">
          <input placeholder="Search" />
          <SearchOutlinedIcon />
        </div>
        <Link to="signin" style={{ textDecoration: "none" }}>
          <button>
            <AccountCircleOutlinedIcon />
            SIGN IN
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
