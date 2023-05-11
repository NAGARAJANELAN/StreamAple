import React, { useState } from "react";
import "./Header.css";
import SideBar from "./SideBar";
import HomePage from "../pages/HomePage";
import SportsPage from "../pages/SportsPage";
function Header() {
  const [sidebarVisible, setSideBarVisible] = useState(false);
  const [searchBarVisible, setSearchBarVisible] = useState(false);

  function toggleMenu() {
    setSideBarVisible((prev) => !prev);
  }

  function toggleSearch() {
    if (sidebarVisible) toggleMenu();
    setSearchBarVisible((prev) => !prev);
  }

  function clearSearch() {
    document.getElementById("search").value = "";
  }

  return (
    <div>
      <div className={`header ${searchBarVisible ? "searcher" : ""}`}>
        <div className="section-A">
          <img
            className="menu"
            onClick={toggleMenu}
            src="dark-menu.png"
            alt="menu"
          />
          <img className="logo" src="logo.png" alt="logo" />
        </div>
        <div className="section-B">
          <div onClick={toggleSearch} className="back-option">
            back
          </div>
          <div className="search-section">
            <input
              type="text"
              id="search"
              placeholder="Search"
              spellCheck="false"
              className="input-field"
            />
            <img
              className="cross"
              onClick={clearSearch}
              src="dark-cross.png"
              alt="cross"
            />
          </div>
          <img
            className="search"
            onClick={toggleSearch}
            src="dark-search.png"
            alt="search"
          />
        </div>
        <div className="section-C">
          <img className="mode" src="dark-mode.png" alt="mode" />
          <img className="profile" src="dark-profile.png" alt="profile" />
        </div>
      </div>
      <SideBar show={sidebarVisible} onToggle={toggleMenu} />
      <div className="content">
        <div className={`side-scroll ${sidebarVisible?"moveleft":""}`}>
          <img src="dark-home.png" alt="home"/>
          <img src="dark-movie.png" alt="movies"/>
          <img src="dark-music.png" alt="music"/>
          <img src="dark-sports.png" alt="sports"/>
          <img src="dark-game.png" alt="games"/>
        </div>
        <div className="spotlight"
          onClick={() => {
            if (sidebarVisible) toggleMenu();
          }}
        >
          <HomePage />
          <HomePage />
          <HomePage />
          <HomePage />
          <HomePage />
          <SportsPage/>
        </div>
      </div>
    </div>
  );
}

export default Header;
