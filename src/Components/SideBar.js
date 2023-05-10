import React from "react";
import "./SideBar.css";

function SideBar({ show, onToggle }) {
  return (
    <>
      {/* {show && ( */}
        <div className={`sidebar ${show?"visible":""}`}>
          {/* <div className="sidebar-head">
            <img
              className="menu"
              onClick={onToggle}
              src="dark-menu.png"
              alt="menu"
            />
            <img className="logo" src="logo.png" alt="logo" />
          </div> */}
          <i>Home</i>
          <i>Subscription</i>
          <i>Library</i>
          <i>History</i>
          <i>Setting</i>
          <i>Help</i>
        </div>
      {/* )} */}
    </>
  );
}

export default SideBar;
