import React from "react";
import "./Video.css";

export default function Video({ img, title, chname, chimage, views, time }) {
  return (
    <div className="video-card">
      <img className="thumbnail" src={img} />
      <div className="video-info">
        <img className="videoinfo-img" src={chimage} />
        <div className="videoinfo-content">
          <h4>{title}</h4>
          <h6>{chname}</h6>
          <h6>
            {views},{time}
          </h6>
        </div>
      </div>
    </div>
  );
}
