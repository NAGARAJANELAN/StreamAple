import React, { useState } from "react";
import "./Header.css";

import { HashRouter, Routes, Route, Link } from "react-router-dom";

import SideBar from "./SideBar";
import HomePage from "../pages/HomePage";
import SportsPage from "../pages/SportsPage";
import MusicPage from "../pages/MusicPage";
import MoviePage from "../pages/MoviePage";
import GamePage from "../pages/GamePage";


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
      <HashRouter>
        <div
          className={`header ${searchBarVisible ? "searcher" : ""} ${
            !darkMode ? "lightmode" : ""
          }`}
        >
          <div className="section-A">
            <img
              className="menu"
              onClick={toggleMenu}
              src={`${darkMode ? "dark-menu.png" : "menu.png"}`}
              alt="menu"
            />

            <Link to="/" style={{ textDecoration: "none" }}>
              <img className="logo" src="logo.png" alt="logo" />
            </Link>
          </div>

          <div className={`section-B ${!darkMode ? "dark-border" : ""}`}>
            <div onClick={toggleSearch} className="back-option">
              <img src={`${darkMode ? "dark-arrow.png" : "arrow.png"}`} className="profile" alt="back" />
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
                src={`${darkMode ? "dark-cross.png" : "cross.png"}`}
                alt="cross"
              />
            </div>

            <img
              className="search"
              onClick={toggleSearch}
              src={`${darkMode ? "dark-search.png" : "search.png"}`}
              alt="search"
            />
          </div>

          <div className="section-C">
            <img
              className="mode"
              onClick={toggleMode}
              src={`${darkMode ? "dark-mode.png" : "mode.png"}`}
              alt="mode"
            />

            <img
              className="profile"
              src={`${darkMode ? "dark-profile.png" : "profile.png"}`}
              alt="profile"
            />
          </div>
        </div>

        <SideBar show={sidebarVisible} darkMode={darkMode} />

        <div className="content">
          <div
            className={`side-scroll ${sidebarVisible ? "moveleft" : ""} ${
              darkMode ? "dark" : "light"
            } ${
              darkMode ? "br-dark" : "br-light"
            }`}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <img
                className="icon"
                src={`${darkMode ? "dark-home.png" : "home.png"}`}
                alt="home"
              />
            </Link>

            <Link to="movie" style={{ textDecoration: "none" }}>
            <img
              className="icon"
              src={`${darkMode ? "dark-movie.png" : "movie.png"}`}
              alt="movies"
            />
            </Link>

            <Link to="music" style={{ textDecoration: "none" }}>
            <img
              className="icon"
              src={`${darkMode ? "dark-music.png" : "music.png"}`}
              alt="music"
            />
            </Link>

            <Link to="sports" style={{ textDecoration: "none" }}>
              <img
                className="icon"
                src={`${darkMode ? "dark-sports.png" : "sports.png"}`}
                alt="sports"
              />
            </Link>

            <Link to="games" style={{ textDecoration: "none" }}>
              <img
                className="icon"
                src={`${darkMode ?  "dark-game.png" : "game.png"}`}
                alt="games"
              />
            </Link>

          </div>

          <div
            className={`spotlight ${!darkMode ? "lightmode" : ""}`}
            onClick={() => {
              if (sidebarVisible) toggleMenu();
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage darkMode={darkMode} />} />
              <Route path="/sports" element={<SportsPage darkMode={darkMode} />} />
              <Route path="/music" element={<MusicPage darkMode={darkMode} />} />
              <Route path="/movie" element={<MoviePage darkMode={darkMode} />} />
              <Route path="/games" element={<GamePage darkMode={darkMode} />} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    </div>
  );
}

export default Header;
