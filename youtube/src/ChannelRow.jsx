import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./ChannelRow.css";

export default function ChannelRow({
  image,
  channel,
  verified,
  subs,
  videos,
  desc,
}) {
  return (
    <div className="channelrow">
      <div className="first">
        <img src={image} />
      </div>
      <div className="center">
        <div class="center-1">
          <h3>{channel}</h3>
          {verified && <CheckCircleOutlineIcon />}
        </div>
        <div class="center-2">
          <h4>{subs} </h4>.<h4>{videos}</h4>
        </div>
        <div class="center-3">
          <h5>{desc}</h5>
        </div>
      </div>
      <div className="Last">
        <button>Subscribe</button>
      </div>
    </div>
  );
}
