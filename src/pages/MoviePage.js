import React from "react";
import "./MoviePage.css";

import Movie from "../Movie";
import PageCard from "../Components/PageCard";

function MoviePage({darkMode}) {
  return (
    <div>
      <h1 className={`head ${darkMode ? "dark" : "light"}`}>Movies</h1>
      <div className="container">
      {Movie.map((data) => (
          <PageCard darkMode={darkMode} key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default MoviePage;
