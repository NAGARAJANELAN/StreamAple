import React from "react";
import "./SportsPage.css";

import Sports from "../Sports";
import PageCard from "../Components/PageCard";

function SportsPage({darkMode}) {
  return (
    <div>
      <h1 className={`${darkMode ? "dark" : "light"}`}>Sports</h1>
      <div className="container">
      {Sports.map((data) => (
          <PageCard darkMode={darkMode} key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default SportsPage;
