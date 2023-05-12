import React from "react";
import "./SideBar.css";

function SideBar({ show,darkMode }) {
  return (
    <>
        <div className={`sidebar ${show?"visible":""} ${darkMode?"dark":"light"}`}>
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
