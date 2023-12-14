import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  let [inputSearch, setInputsearch] = useState("");

  let changeInputSearch = (e) => {
    console.log(e.target.value);
    setInputsearch(e.target.value);
  };

  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <Link to={`/`}>
          <img
            className="header_logo"
            src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/youtube-logo.jpeg"
          />
        </Link>
      </div>
      <div className="header_center">
        <input
          onChange={changeInputSearch}
          value={inputSearch}
          type="text"
          placeholder="Search"
        />
        <Link to={`/search/${inputSearch}`}>
          <button class="searchIcon">
            <SearchIcon />
          </button>
        </Link>
        <KeyboardVoiceIcon class="voice-recorder" />
      </div>

      <div className="header_icon">
        <VideoCallSharpIcon className="header__icon" />
        <AppsSharpIcon className="header__icon" />
        <NotificationsSharpIcon className="header__icon" />
        <img
          className="Account_img"
          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-2379004.jpg&fm=jpg"
        />
      </div>
    </div>
  );
}
