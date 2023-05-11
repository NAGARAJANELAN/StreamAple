import React from "react";
import "./SideBar.css";

function SideBar({ show, onToggle }) {
  return (
    <>
        <div className={`sidebar ${show?"visible":""}`}>
          <i>Home</i>
          <i>Subscription</i>
          <i>Library</i>
          <i>History</i>
          <i>Setting</i>
          <i>Help</i>
        </div>
    </>
  );
}

export default SideBar;
