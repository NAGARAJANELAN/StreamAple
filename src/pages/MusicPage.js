import React from "react";
import "./MusicPage.css";

import Music from "../Music";
import PageCard from "../Components/PageCard";

function MusicPage({darkMode}) {
  return (
    <div>
      <h1 className={`head ${darkMode ? "dark" : "light"}`}>Music</h1>
      <div className="container">
      {Music.map((data) => (
          <PageCard darkMode={darkMode} key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default MusicPage;