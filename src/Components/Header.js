import React, { useState } from "react";
import "./Header.css";
import SideBar from "./SideBar";

function Header() {
  const [sidebarVisible, setSideBarVisible] = useState(false);

  function toggle() {
    setSideBarVisible((prev) => !prev);
  }

  return (
    <div>
      <div className="header">
        <div className="section-A">
          <img
            className="menu"
            onClick={toggle}
            src="dark-menu.png"
            alt="menu"
          />
          <img className="logo" src="logo.png" alt="logo" />
        </div>
        <div className="section-B">
          <input
            type="search"
            placeholder="Search"
            spellCheck="false"
            className="input-field"
          />
          <img className="search" src="dark-search.png" alt="search" />
        </div>
        <div className="section-C">
          <img className="mode" src="dark-mode.png" alt="mode" />
          <img className="profile" src="dark-profile.png" alt="profile" />
        </div>
      </div>
      <SideBar show={sidebarVisible} onToggle={toggle} />
      <div className="content">
        <div style={{backgroundColor:"green"}}>content</div>
        <div style={{backgroundColor:"purple"}} onClick={()=>{
          if(sidebarVisible) toggle();
        }}>videos</div>
      </div>
    </div>
  );
}

export default Header;
