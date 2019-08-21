import React from "react";

const ColleagueCard = ({ imgsrc, name, designation, teamAndLocation }) => {
  return (
    <div className="colleague-card">
      <div className="colleague-card-image-container">
        <img src={imgsrc} alt="img"></img>
      </div>
      <div className="colleague-card-info">
        <div className="colleague-card-name">{name}</div>
        <div className="colleague-card-designation">{designation}</div>
        <div className="colleague-card-team-location">{teamAndLocation}</div>
      </div>
    </div>
  );
};

export default ColleagueCard;
