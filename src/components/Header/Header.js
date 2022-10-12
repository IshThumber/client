import React from "react";
import "./Header.css";
export default function Header(props) {
  return (
    <div className="Main-header-admin">
      <div className="header-title-text">{props.HeaderText}</div>
    </div>
  );
}
