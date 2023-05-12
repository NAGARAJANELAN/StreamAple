import React from "react";
import "./PageCard.css";

function PageCard({ darkMode, data }) {
  return (
    <div className="page-card">
      <img
        src={`${data.imgUrl}`}
        className={`poster ${darkMode ? "dark" : "light"}`}
        alt="poster"
      />
      <div className="card-desc">
        <div className="card-title">{data.title}</div>
        <img className="card-play" src="play.png" alt="play" />
      </div>
    </div>
  );
}

export default PageCard;
