import React from "react";
import "./VideoRow.css";

export default function VideoRow({
  views,
  subs,
  desc,
  time,
  channel,
  title,
  img,
}) {
  return (
    <div className="videoRow">
      <img src={img} />
      <div className="videoRow-text">
        <h3>{title}</h3>
        <p>
          <img src="https://yt3.googleusercontent.com/ytc/AIf8zZRDiiescilO4rYZXxwz6KSGMNFSiw0HxvQ9C8cvpw=s176-c-k-c0x00ffffff-no-rj-mo" />
          {channel} , {subs} Subscribers {views} views , {time}
        </p>
        <p>{desc}</p>
      </div>
    </div>
  );
}
