import React from "react";
import "./VideoCard.css";

function VideoCard({ data ,darkMode}) {
  return (
    <div className="video-card">
      <img src={`${data.imgUrl}`} className={`movie-img ${darkMode?"dark":""}`} alt="poster" />
      <div className="desc">
        <div className="title">{data.title}</div>
        <img className="play" src="play.png" alt="play" />
      </div>
    </div>
  );
}

export default VideoCard;