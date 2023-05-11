import React from "react";
import Data from "../Data";
import VideoCard from "../Components/VideoCard";

import './HomePage.css';

function HomePage() {

  return (
    <div>
      <h1 className="head">Latest Movies</h1>
      <div className="trending-section no-scrollbar">
      {Data.map((data) => (
        <VideoCard key={data.id} data={data} />
      ))}
      </div>
    </div>
  );
}

export default HomePage;
