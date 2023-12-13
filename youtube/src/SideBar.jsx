import React from "react";
import Siderow from "./Siderow";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import HistoryIcon from "@mui/icons-material/History";
import VideoSettingsIcon from "@mui/icons-material/VideoSettings";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import "./Sidebar.css";

export default function SideBar() {
  return (
    <div class="SideBar">
      <Siderow selected="true" title="Home" Icon={HomeIcon} />
      <Siderow title="Shorts" Icon={WhatshotIcon} />
      <Siderow title="Subscription" Icon={SubscriptionsIcon} />
      <hr></hr>
      <Siderow title="Library" Icon={LibraryAddIcon} />
      <Siderow title="History" Icon={HistoryIcon} />
      <Siderow title="Your videos" Icon={VideoSettingsIcon} />
      <Siderow title="Watch Later" Icon={WatchLaterIcon} />
      <Siderow title="Liked videos" Icon={ThumbUpIcon} />
      <Siderow title="Show more" Icon={ArrowDropDownIcon} />
      <hr />
    </div>
  );
}
