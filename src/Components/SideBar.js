import React from "react";
import "./SideBar.css";

function SideBar({ show, darkMode }) {
  return (
    <>
      <div
        className={`sidebar ${show ? "visible" : ""} ${
          darkMode ? "dark" : "light"
        }`}
      >
        <div><span className="bar">Home</span></div>
        <div><span className="bar">Subscription</span></div>
        <div><span className="bar">Library</span></div>
        <div><span className="bar">History</span></div>
        <div><span className="bar">Setting</span></div>
        <div><span className="bar">Help</span></div>
      </div>
    </>
  );
}

export default SideBar;
