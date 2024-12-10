import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div className="logo">
            <img src={Logo} alt="logo" className="image" />
            YouTube
          </div>
        </Link>
        <div className="item">
          <HomeIcon />
          Home
        </div>
        <div className="item">
          <ExploreOutlinedIcon />
          Explore
        </div>
        <div className="item">
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </div>
        <div className="hr"></div>
        <div className="item">
          <VideoLibraryOutlinedIcon />
          Library
        </div>
        <div className="item">
          <HistoryOutlinedIcon />
          History
        </div>
        <div className="hr"></div>
        <div className="login">
          Sign in to like Videos, comment, and subscribe.
          <Link to="signin" style={{ textDecoration: "none" }}>
            <button>
              <AccountCircleOutlinedIcon /> SIGN IN
            </button>
          </Link>
        </div>
        <div className="hr"></div>
        <div className="title">BEST OF YOUTUBE</div>
        <div className="item">
          <LibraryMusicOutlinedIcon />
          Music
        </div>
        <div className="item">
          <SportsBasketballOutlinedIcon />
          Sports
        </div>
        <div className="item">
          <SportsEsportsOutlinedIcon />
          Gaming
        </div>
        <div className="item">
          <MovieOutlinedIcon />
          Movies
        </div>
        <div className="item">
          <ArticleOutlinedIcon />
          News
        </div>
        <div className="item">
          <LiveTvOutlinedIcon />
          Live
        </div>
        <div className="hr"></div>
        <div className="item">
          <SettingsOutlinedIcon />
          Settings
        </div>
        <div className="item">
          <FlagOutlinedIcon />
          Report
        </div>
        <div className="item">
          <HelpOutlineOutlinedIcon />
          Help
        </div>
        <div className="item">
          <SettingsBrightnessOutlinedIcon />
          Mode
        </div>
      </div>
    </div>
  );
};

export default Menu;
