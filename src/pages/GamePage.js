import React from "react";
import "./GamePage.css";

import Game from "../Game";
import PageCard from "../Components/PageCard";

function GamePage({darkMode}) {
  return (
    <div>
      <h1 className={`head ${darkMode ? "dark" : "light"}`}>Games</h1>
      <div className="container">
      {Game.map((data) => (
          <PageCard darkMode={darkMode} key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default GamePage;
