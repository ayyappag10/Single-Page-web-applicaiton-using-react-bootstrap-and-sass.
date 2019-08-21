import React from "react";

const EventAdditionalDetails = () => {
  return (
    <div className="event-additional-details">
      <div>
        <div className="event-additional-item-title">Focus area</div>
        <div className="event-additional-item-info">
          Nutrition | Employability/Skills/Livelihood
        </div>
      </div>
      <div className="small-vertical-seperator"></div>
      <div className="event-additional-item-title">
        Share &amp; Invite
        <a href="#">
          <img
            className="social-media-icon"
            src="assets/group-8.png"
            alt="img"
          ></img>
        </a>
        <img
          className="social-media-icon"
          src="assets/group-26.png"
          alt="img"
        ></img>
        <img
          className="social-media-icon"
          src="assets/group-49.png"
          alt="img"
        ></img>
        <img
          className="social-media-icon"
          src="assets/group-21.png"
          alt="img"
        ></img>
      </div>
      <div className="small-vertical-seperator"></div>
      <div className="people-going">
        <img
          className="people-going-icon"
          src="assets/oval-5_2.png"
          alt="img"
        ></img>
        <img
          className="people-going-icon"
          src="assets/oval-5_2.png"
          alt="img"
        ></img>
        <img
          className="people-going-icon"
          src="assets/oval-5_2.png"
          alt="img"
        ></img>
        <img
          className="people-going-icon"
          src="assets/oval-5_2.png"
          alt="img"
        ></img>
        <span className="number-of-people-going">+120 are going</span>
        <span className="number-of-slots-left">(26 slots left)</span>
      </div>
    </div>
  );
};

export default EventAdditionalDetails;
