import React from "react";
import Data from "../Data";
import Music from "../Music";
import Sports from "../Sports";
import Game from "../Game";

import VideoCard from "../Components/VideoCard";
import "./HomePage.css";

function HomePage({ darkMode }) {
  return (
    <div>

      <h1 className={`head ${darkMode ? "dark" : "light"}`}>Latest Movies</h1>
      <div className="trending-section no-scrollbar">
        {Data.map((data) => (
          <VideoCard darkMode={darkMode} key={data.id} data={data} />
        ))}
      </div>

      <h1 className={`second head ${darkMode ? "dark" : "light"}`}>Music</h1>
      <div className="trending-section no-scrollbar">
        {Music.map((data) => (
          <VideoCard darkMode={darkMode} key={data.id} data={data} />
        ))}
      </div>

      <h1 className={`second head ${darkMode ? "dark" : "light"}`}>Sports</h1>
      <div className="trending-section no-scrollbar">
        {Sports.map((data) => (
          <VideoCard darkMode={darkMode} key={data.id} data={data} />
        ))}
      </div>

      <h1 className={`second head ${darkMode ? "dark" : "light"}`}>Games</h1>
      <div className="trending-section no-scrollbar">
        {Game.map((data) => (
          <VideoCard darkMode={darkMode} key={data.id} data={data} />
        ))}
      </div>
      
    </div>
  );
}

export default HomePage;
