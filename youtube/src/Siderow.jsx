import React from "react";
import "./siderow.css";
export default function Siderow({ selected, Icon, title }) {
  return (
    <div className={`siderow ${selected && "selected"}`}>
      <Icon className="siderow-icons" />
      <h4 className="siderow-title">{title}</h4>
    </div>
  );
}
