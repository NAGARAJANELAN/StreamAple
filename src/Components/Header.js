import React, { useState } from "react";
import "./Header.css";
import SideBar from "./SideBar";
import HomePage from "../pages/HomePage";
import SportsPage from "../pages/SportsPage";
function Header() {

  const [sidebarVisible, setSideBarVisible] = useState(false);
  const [searchBarVisible, setSearchBarVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  function toggleMenu() {
    setSideBarVisible((prev) => !prev);
  }

  function toggleMode() {
    setDarkMode((prev) => !prev);
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
      <div className={`header ${searchBarVisible ? "searcher" : ""} ${!darkMode?"lightmode":""}`}>
        <div className="section-A">
          <img
            className="menu"
            onClick={toggleMenu}
            src={`${darkMode?"dark-menu.png":"menu.png"}`}
            alt="menu"
          />
          <img className="logo" src="logo.png" alt="logo" />
        </div>
        <div className={`section-B ${!darkMode?"dark-border":""}`}>
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
              src={`${darkMode?"dark-cross.png":"cross.png"}`}
              alt="cross"
            />
          </div>
          <img
            className="search"
            onClick={toggleSearch}
            src={`${darkMode?"dark-search.png":"search.png"}`}
            alt="search"
          />
        </div>
        <div className="section-C">
          <img className="mode" onClick={toggleMode} src={`${darkMode?"dark-mode.png":"mode.png"}`} alt="mode" />
          <img className="profile" src={`${darkMode?"dark-profile.png":"profile.png"}`} alt="profile" />
        </div>
      </div>
      <SideBar show={sidebarVisible} darkMode={darkMode} />
      <div className="content">
        <div className={`side-scroll ${sidebarVisible ? "moveleft" : ""} ${darkMode?"dark":"light"}`}>
          <img src={`${darkMode?"dark-home.png":"home.png"}`} alt="home" />
          <img src={`${darkMode?"dark-movie.png":"movie.png"}`} alt="movies" />
          <img src={`${darkMode?"dark-music.png":"music.png"}`} alt="music" />
          <img src={`${darkMode?"dark-sports.png":"sports.png"}`} alt="sports" />
          <img src={`${darkMode?"dark-game.png":"game.png"}`} alt="games" />
        </div>
        <div
          className={`spotlight ${!darkMode?"lightmode":""}`}
          onClick={() => {
            if (sidebarVisible) toggleMenu();
          }}
        >
          <HomePage darkMode={darkMode}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
