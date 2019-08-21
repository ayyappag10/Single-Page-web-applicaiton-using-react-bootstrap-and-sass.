import React from "react";

const VenueInfo = () => {
  return (
    <div className="venue-info">
      <div className="venue-basic-info">
        In operation since 1979, Chicxulub Food Bank is a fixture of market life
        and part of a community approach to ensure that all residents of Mexico
        have access to quality and nutritious food. It provides food to nearly
        1000 people weekly and is totally dependent on its volunteers for this.
      </div>
      <div className="venue-basic-info-continue-reading">
        Continue reading
        <img className="caret" src="assets/down@2x.png" alt="img"></img>
      </div>
      <div className="venue-facilities">
        <div className="venue-facilitie-item">
          <img
            className="venue-facilitie-icon"
            src="assets/group-32.png"
            alt="img"
          ></img>
          Avail transfers
        </div>
        <div className="venue-facilitie-item">
          <img
            className="venue-facilitie-icon"
            src="assets/group-50.png"
            alt="img"
          ></img>
          Indoors
        </div>
        <div className="venue-facilitie-item">
          <img
            className="venue-facilitie-icon"
            src="assets/group-51.png"
            alt="img"
          ></img>
          Open to family &amp; friends
        </div>
        <div className="venue-facilitie-item">
          <img
            className="venue-facilitie-icon"
            src="assets/group-52.png"
            alt="img"
          ></img>
          Goodies
        </div>
      </div>
      <div className="venue-info-sub-head">Skills required</div>
      <div className="venue-info-sub-info">
        Volunteering is for everyone, your intent and time is all that matters.
      </div>
      <div className="venue-info-sub-head">
        Who will benefit from my contribution?
      </div>
      <div className="venue-info-sub-info">
        Socially Backward Group I Children I Women
      </div>
      <div className="venue-info-seperator"></div>
      <div className="venue-info-sub-head">
        Why should I contribute?
        <img
          className="venue-info-sub-head-caret"
          src="assets/down@2x.png"
          alt="drop-down-icon"
        ></img>
      </div>
      <div className="venue-info-seperator"></div>
      <div className="venue-info-sub-head">
        How will it make a difference?
        <img
          className="venue-info-sub-head-caret"
          src="assets/down@2x.png"
          alt="drop-down-icon"
        ></img>
      </div>
      <div className="venue-info-seperator"></div>
    </div>
  );
};

export default VenueInfo;
