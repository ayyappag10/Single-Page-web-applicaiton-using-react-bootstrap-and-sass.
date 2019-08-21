import React from "react";

const EventInfo = () => {
  return (
    <div className="event-info">
      <div className="event-info-header">
        Be a food collection agent for a day
      </div>
      <div className="foundation-details">
        By Smile Foundation
        <img
          id="foundation-verification-status"
          src="assets/shape_4.png"
          alt="img"
        ></img>
        <div className="foundation-rating">4</div>
      </div>
      <div className="event-info-sub-item event-date">
        <img
          className="event-info-sub-item-icon"
          src="assets/calendar.png"
          alt="img"
        ></img>
        Sunday, October 13, 2019
      </div>
      <div className="event-info-sub-item event-time">
        <img
          className="event-info-sub-item-icon"
          src="assets/clock.png"
          alt="img"
        ></img>
        12:00 AM – 3:00 AM (3 hours)
      </div>
      <div className="event-info-sub-item event-venue">
        <img
          className="event-info-sub-item-icon"
          src="assets/map-pin.png"
          alt="img"
        ></img>
        Chicxulub Puerto, Mexico
        <a id="event-info-show-on-map" href="#showonmap">
          Show on map
        </a>
      </div>
      <div id="event-info-requirments-seperator"></div>
      <div className="event-info-requirments">
        <div>Average commitment required: 3 hours</div>
        <button id="event-info-requirments-button">VOLUNTEER NOW</button>
        <div>Register before October 10, 2019 </div>
      </div>
    </div>
  );
};

export default EventInfo;
